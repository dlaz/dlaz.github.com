'use strict';

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const ejs = require('ejs');
const puppeteer = require('puppeteer');

const ROOT = __dirname;
const resume = JSON.parse(fs.readFileSync(path.join(ROOT, 'resume.json'), 'utf8'));

// ── SVG icons ────────────────────────────────────────────────────────────────

const icons = {
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>`,
};

// ── Template helpers ──────────────────────────────────────────────────────────

/**
 * Returns the venue/year portion of a publication citation as HTML.
 * Publications are stored in display order (same index as #bibtex pres),
 * so jQuery's ix-based lookup works correctly.
 */
function formatCitation(pub) {
  if (!pub.venue) {
    // misc: "TITLE, YEAR."
    if (pub.bibtex.type === 'misc') {
      return `,\n          ${pub.year}.`;
    }
    // article/other without venue: "TITLE.\n          YEAR."
    return `\n          ${pub.year}.`;
  }
  const pages = pub.pages ? `, pages ${pub.pages.replace('--', '&ndash;')}` : '';
  const org = pub.org ? ` ${pub.org},` : '';
  return `\n          In <em>${pub.venue}</em>${pages}.${org}\n          ${pub.year}.`;
}

/**
 * Builds the bibtex-formatted HTML block for the hidden #bibtex div.
 * The entry key is wrapped in an anchor matching the original bibtex2html output.
 */
function buildBibtexHtml(pub) {
  const bt = pub.bibtex;
  const fields = Object.entries(bt)
    .filter(([k]) => k !== 'type')
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n');
  return `@${bt.type}{<a href="danpapers.html#${pub.key}">${pub.key}</a>,\n${fields}\n}`;
}

// ── Build ─────────────────────────────────────────────────────────────────────

async function build() {
  // 1. Render EJS template → index.html
  const templatePath = path.join(ROOT, 'resume.html.ejs');
  const html = await ejs.renderFile(templatePath, {
    data: resume,
    icons,
    formatCitation,
    buildBibtexHtml,
  });

  const indexPath = path.join(ROOT, 'index.html');
  fs.writeFileSync(indexPath, html, 'utf8');
  console.log('✓ Generated index.html');

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });

    const fileUrl = pathToFileURL(indexPath).href;
    await page.goto(fileUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    // Ensure screenshots directory exists
    const screenshotsDir = path.join(ROOT, 'screenshots');
    fs.mkdirSync(screenshotsDir, { recursive: true });

    // 3. Full-page screenshot of the HTML (screen rendering)
    await page.emulateMediaType('screen');
    await page.screenshot({
      path: path.join(screenshotsDir, 'html-screenshot.png'),
      fullPage: true,
    });
    console.log('✓ Captured screenshots/html-screenshot.png');

    // 4. Full-page screenshot with print media (shows PDF appearance)
    await page.emulateMediaType('print');
    await page.screenshot({
      path: path.join(screenshotsDir, 'pdf-screenshot.png'),
      fullPage: true,
    });
    console.log('✓ Captured screenshots/pdf-screenshot.png');

    // 5. Generate PDF (screen emulation so styled CSS applies)
    await page.emulateMediaType('screen');
    // Hide sections that should not appear in the PDF
    await page.evaluate(() => {
      document.querySelectorAll('.no-pdf').forEach(el => { el.style.display = 'none'; });
    });
    // Inject compact styles to keep the PDF to ≤2 pages
    await page.addStyleTag({ content: `
      body { font-size: 0.875rem; line-height: 1.4; }
      .profile { padding-bottom: 0.6rem; margin-bottom: 0; }
      h2 { margin-top: 0.6rem; margin-bottom: 0.35rem; }
      .job { padding: 0.3rem 0.5rem; margin-bottom: 0; }
      .job-role { margin-bottom: 0.15rem; }
      ul { margin-top: 0.15rem; margin-bottom: 0.15rem; }
      li { margin-bottom: 0; }
      .skills-grid { gap: 0.15rem 1rem; }
      .section p { margin-bottom: 0.35rem; }
    ` });
    await page.pdf({
      path: path.join(ROOT, 'resume.pdf'),
      format: 'Letter',
      margin: { top: '0.75in', right: '0.75in', bottom: '0.75in', left: '0.75in' },
      printBackground: true,
    });
    console.log('✓ Generated resume.pdf');
  } finally {
    await browser.close();
  }
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
