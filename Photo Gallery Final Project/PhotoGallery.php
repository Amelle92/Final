	<!--
		Name: Adam Melle
		Adam_Melle@student.uml.edu
		UMass Lowell
		Comp.4610, GUI Programming I
		File: /usr/cs/2016/amelle/public_html/Final/PhotoGallery.html
		Created: 24-Nov-2017
		Last updated by AM: 24-Nov-2017, 8:19pm
		Description: 
	-->
	
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv='cache-control' content='no-cache'>
		<meta http-equiv='expires' content='0'>
		<meta http-equiv='pragma' content='no-cache'>
		<link rel="stylesheet" href="css/PhotoGallery.css?random=<?php echo uniqid(); ?>">
		<title>Photo Gallery</title>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/ParseJson.js?random=<?php echo uniqid(); ?>"></script>
		<script src="js/UploadOverlay.js?random=<?php echo uniqid(); ?>"></script>
		<script src="js/UploadImage.js?random=<?php echo uniqid(); ?>"></script>
		<script src="js/DeleteImage.js?random=<?php echo uniqid(); ?>"></script>
		<script src="js/EditImage.js?random=<?php echo uniqid(); ?>"></script>
		<script src="js/EditOverlay.js?random=<?php echo uniqid(); ?>"></script>
	</head>
	
	<body onload="ParseJson(0)">
		
		<!--Upload Image Overlay-->
		<div class="Overlay" id="UploadOverlay">
			<div class="ModalWindow">
				<input class="Exitbtn" type="button" value="X" onclick="UploadOverlayClose()">
				<form id="uploadimage" action="" method="post" enctype="multipart/form-data">
					
					<div id="image_preview"><img id="previewing" src="" /></div>
					<div id="selectImage">
						<label>Select Image to Upload</label><br/>
						<input type="file" name="file" id="file" required />
						<select name="album" id="albumnum">
							<option value="0">Album1</option>
							<option value="1">Album2</option>
							<option value="2">Album3</option>
							<option value="3">Album4</option>
						</select>
						<div style="margin-top:6px; margin-bottom:6px;">
							<label>Image Name</label>
							<input type="text" size="30" name="ImageName" id="ImageName">
						</div>
						<div id="message"></div>
						<input type="submit" value="Upload" class="submit" />
					</div>
			
				</form>
			</div>
		</div>
		
		<!--Edit Image Overlay-->
		<div class="Overlay" id="EditOverlay">
			<div class="ModalWindow ModalLarge" id="EditImage">	
				<img id="EditedImage" style="display:inline-block" src="" alt="Image Preview">
			</div>
		</div>
		
		<!--Navigation Menu-->
		<div id="FixedNav">
			<div id="Logo">
				<b>Photo Gallery</b>
			</div>
			<div id="Albums">
				<div class="Center">
					<table>
						<td>
							<th><input class="btn" type="button" value="Album 1" onclick="ParseJson(0)"></th>
							<th><input class="btn" type="button" value="Album 2" onclick="ParseJson(1)"></th>
							<th><input class="btn" type="button" value="Album 3" onclick="ParseJson(2)"></th>
							<th><input class="btn" type="button" value="Album 4" onclick="ParseJson(3)"></th>
						</td>
					</table>
				</div>
			</div>
			<div id="Upload">
				<input class="btn" type="button" value="Upload" onclick="UploadOverlayOpen()">
			</div>
		</div>
		
		<div id="Gallery"></div>

	</body>
</html>