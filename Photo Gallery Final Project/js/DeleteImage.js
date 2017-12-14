function DeleteImage(index, album) {
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var IMG = JSON.parse(this.responseText);
			
			var status = confirm("Delete " + IMG.Images[index].Name + "?");
			if(status==true){
				var file = IMG.Images[index].Path;
				var i = index;
				var a=album;
				$.ajax({
					type:"POST",
					url:"./Delete.php",
					data:{file:file, i:i, a:a},
					success(html){
						ParseJson(a);
					}
				});
			}
			
		}
	};
	xmlhttp.open("GET", "json/Images" + album +".json?v=" + Date.now(), true);
	xmlhttp.send();
}