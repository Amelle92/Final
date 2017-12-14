var angle = 0;

function EditImage(index, album) {
	/*
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var IMG = JSON.parse(this.responseText);
			
			var status = confirm("Save Edits?");
			if(status==true){
				var file = IMG.Images[index].Path;
				var a = angle;
				$.ajax({
					type:"POST",
					url:"./Delete.php",
					data:{file:file, a:angle},
					success(html){
						ParseJson(a);
					}
				});
			}
			
		}
	};
	xmlhttp.open("GET", "json/Images" + album +".json?v=" + Date.now(), true);
	xmlhttp.send();
	*/
}

function RotateImage() {
	img = document.getElementById('container');
	angle = (angle + 90) % 360;
	img.className = "rotate" + angle;		
}

function Brightness(value) {
	document.getElementById("image").style.filter = "brightness(" + value + "%)";
}

function Contrast(value) {
	document.getElementById("image").style.filter = "contrast(" + value + "%)";
}

function Grayscale(value) {
	document.getElementById("image").style.filter = "grayscale(" + value + "%)";
}
function Saturate(value) {
	document.getElementById("image").style.filter = "saturate(" + value + "%)";
}

function Sepia(value) {
	document.getElementById("image").style.filter = "sepia(" + value + "%)";
}
