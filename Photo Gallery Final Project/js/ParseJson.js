function ParseJson(album) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var IMG = JSON.parse(this.responseText);
			document.getElementById("Gallery").innerHTML = "";
			for (var x = 0; x < IMG.Images.length; x++) {
				 document.getElementById("Gallery").innerHTML += '<div class="ImageContainer"><img class="thumbnail" src="' + IMG.Images[x].Path + 
				 '" alt="sample"><div class="ImageOverlay"><div class="ImageText">' + IMG.Images[x].Name + 
				 '</div><input type="button" value="Edit" onclick="EditOverlay(' + x + ',' + album + ')"><input type="button" value="Delete" onclick="DeleteImage(' + x + ',' + album + ')"></div></div>\n';		
			}
		}
	};
	xmlhttp.open("GET", "json/Images" + album +".json?v=" + Date.now(), true);
	xmlhttp.send();
}