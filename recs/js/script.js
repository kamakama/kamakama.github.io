$(document).ready(function() {
    $("#imgselect img").hover(function() {
		$(this).css("opacity", "0.7");
	},function(){
		$(this).css("opacity", "1");
	});
	
	$("#kirinolink").click(function(){
		$("body").css("background-image", "url('img/mascot/kirino.png')");
	});
	
	$("#ayaselink").click(function(){
		$("body").css("background-image", "url('img/mascot/ayase.png')");
	});
	
	// change displayed mascot on click
	$(".mascot").click(function(){
		$("body").css("background-image", "url('img/mascot/"+$(this).attr("alt")+".png')");
	});
});