function EditOverlayClose() {
	document.getElementById("EditOverlay").style.display = "none";
	document.getElementById("EditImage").innerHTML = '';
}

function EditOverlay(index, album) {
	document.getElementById("EditOverlay").style.display = "block";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var IMG = JSON.parse(this.responseText);
			var Panel = document.getElementById("EditImage");
			var path = IMG.Images[index].Path;
			Panel.innerHTML = '';
			Panel.innerHTML += '<input class="Exitbtn" type="button" value="X" onclick="EditOverlayClose()">\n'
			Panel.innerHTML += '<div id="container"><img id="image" style="display:inline-block" src="' + IMG.Images[index].Path + '" alt="Image Preview"></div>\n';
			Panel.innerHTML += '<input style="margin-right:5px" type="button" value="Rotate 90&deg;" onclick="RotateImage()">\n';
			Panel.innerHTML += '<label>Brightness</label><input type="range" value="100" min="0" max="500" oninput="Brightness(this.value)" onchange="Brightness(this.value)">';
			Panel.innerHTML += '<label>Grayscale</label><input type="range" value="0" min="0" max="100" oninput="Grayscale(this.value)" onchange="Grayscale(this.value)"><br>';
			Panel.innerHTML += '<label>Contrast</label><input type="range" value="100" min="0" max="500" oninput="Contrast(this.value)" onchange="Contrast(this.value)">';
			Panel.innerHTML += '<label>Saturate</label><input type="range" value="100" min="0" max="500" oninput="Saturate(this.value)" onchange="Saturate(this.value)">';
			Panel.innerHTML += '<label>Sepia</label><input type="range" value="0" min="0" max="100" oninput="Sepia(this.value)" onchange="Sepia(this.value)">';
			Panel.innerHTML += '<input style="display:block; margin: 3px;" type="button" value="Save">';
		}
	};
	xmlhttp.open("GET", "json/Images" + album + ".json?v=" + Date.now(), true);
	xmlhttp.send();
}