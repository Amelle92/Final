<?php
	// Delete the image file
	if (array_key_exists ('file', $_POST)) {
		$filename = $_POST['file'];
		if ( file_exists ( $filename ) ) {
			unlink( $filename );
		}
	}
	
	// Delete the Json entry
	$index = $_POST['i'];
	$album = $_POST['a'];
	echo $album;
	$File = file_get_contents("json/Images$album.json");
	$Json = json_decode($File);
	unset($Json->Images[$index]);
	$Json->Images = array_values($Json->Images);
	$jsonData = json_encode($Json);
	//$pathstring = "json/Images{$album}.json";
	file_put_contents("json/Images$album.json", $jsonData);
?>
