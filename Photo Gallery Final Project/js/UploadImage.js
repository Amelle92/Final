$(document).ready(function (e) {
	$("#uploadimage").on('submit',(function(e) {
		document.getElementById("UploadOverlay").style.display = "none";
		e.preventDefault();
		$("#message").empty();
		$.ajax({
			url: "Upload.php",
			type: "POST",
			data: new FormData(this),
			contentType: false,
			cache: false, 
			processData:false,
			success: function(data)	{
				document.getElementById("file").value = "";
				document.getElementById("ImageName").value = "";
				document.getElementById("albumnum").value = 0;
			}
		});
	}));

	$(function() {
		$("#file").change(function() {
			$("#message").empty();
			var file = this.files[0];
			var imagefile = file.type;
			var match= ["image/jpeg","image/png","image/jpg"];
			if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2]))) {
				$('#previewing').attr('src','noimage.png');
				$("#message").html("<p><b>Only accepts jpeg, jpg and png</b></p>");
				return false;
			}
			else {
				var fr = new FileReader();
				fr.onload = preview;
				fr.readAsDataURL(this.files[0]);
			}
		});
	});

	function preview(e) {
		$("#file").css("color","green");
		$('#image_preview').css("display", "block");
		$('#previewing').attr('src', e.target.result);
		$('#previewing').attr('width', '300px');
		$('#previewing').attr('height', 'auto');
	};
});