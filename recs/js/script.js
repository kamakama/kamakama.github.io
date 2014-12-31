$(document).ready(function() {

	//hover effects
	$(".rec h3").hover(function() {
		$(this).css("background-color", "#646972");
	},function() {
		$(this).css("background-color", "#4b4a4a");
	});
	
	$("#imgselect img").hover(function() {
		$(this).css("opacity", "0.7");
	},function() {
		$(this).css("opacity", "1");
	});
	
	//collapse or expand recs
	$(".rec h3").click(function() {
		$("p", $(this).parent(".rec")).slideToggle( 200, "linear" );
	});
	
	var hiddenstate = true;
	$("#collapse").click(function() {
		if (hiddenstate == true) {
			$("#recs p").css("display", "block");
			hiddenstate=false;
		} else {
			$("#recs p").css("display", "none");
			hiddenstate=true;
		}
	});
	
	// change displayed mascot on click
	$(".mascot").click(function(){
		$("body").css("background-image", "url('img/mascot/"+$(this).attr("alt")+".png')");
	});
	
	$("#kirinolink").click(function(){
		$("body").css("background-image", "url('img/mascot/kirino.png')");
	});
	
	$("#ayaselink").click(function(){
		$("body").css("background-image", "url('img/mascot/ayase.png')");
	});
	
});