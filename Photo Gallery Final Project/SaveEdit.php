<?php
	$file = $_POST['file'];
	$degrees = $_POST['angle'];
	$source = imagecreatefromjpeg($filename);
	$rotate = imagerotate($source, $degrees, 0);
	file_put_contents($file,$rotate);
?>