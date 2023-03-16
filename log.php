<pre>
<?
$line = sprintf("%s	%s	%s\n", date("F j, Y, g:i a"), $_SERVER['REMOTE_ADDR'], gethostbyaddr($_SERVER['REMOTE_ADDR']));
$file = fopen('log.txt', 'a');
fwrite($file, $line);
fclose($file);
?>
</pre>
