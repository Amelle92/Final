<?php
if	(isset($_FILES["file"]["type"])) {
	$validextensions = array("jpeg", "jpg", "png");
	$temporary = explode(".", $_FILES["file"]["name"]);
	$file_extension = end($temporary);
	if ((($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/jpg") || ($_FILES["file"]["type"] == "image/jpeg")) 
		&& ($_FILES["file"]["size"] < 1000000000) && in_array($file_extension, $validextensions)) {
			if ($_FILES["file"]["error"] > 0) {
				echo "Return Code: " . $_FILES["file"]["error"] . "<br/><br/>";
			}
			else {
				if (file_exists("Images/" . $_FILES["file"]["name"])) {
					echo $_FILES["file"]["name"] . " <span id='invalid'><b>already exists.</b></span> ";
				}
				else {
					$sourcePath = $_FILES['file']['tmp_name'];
					$targetPath = "Images/".$_FILES['file']['name'];
					move_uploaded_file($sourcePath,$targetPath);
					echo "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
					echo "<br/><b>File Name:</b> " . $_FILES["file"]["name"] . "<br>";
					echo "<b>Type:</b> " . $_FILES["file"]["type"] . "<br>";
					echo "<b>Size:</b> " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
					echo "<b>Temp file:</b> " . $_FILES["file"]["tmp_name"] . "<br>";
					
					$ImageName = $_POST['ImageName'];
					$Album = $_POST['album'];
					// Add path to JSON
					$image->Name = $ImageName;
					$image->Path = "Images/" . $_FILES["file"]["name"];
					$File = file_get_contents("json/Images$Album.json");
					$Json = json_decode($File);
					array_push($Json->Images, $image);
					$jsonData = json_encode($Json);
					file_put_contents("json/Images$Album.json", $jsonData);
				}
			}
	}
	else {
		echo "<span id='invalid'>***Invalid file Size or Type***<span>";
	}
}
?>