$(document).ready(function() {

	//initialize sound
	$.ionSound({
		sounds: [{name: "nyanpass"}],
		volume: 0.2,
		path: "sounds/",
		preload: true
	});
	$("#nyanpasu").click(function() { $.ionSound.play("nyanpass"); });
	
	//hover effects
	$(".rec h3").hover(function() {
		$(this).css("background-color", "#646972");
	},function() {
		$(this).css("background-color", "#4b4a4a");
	});

	$(".menu-item").hover(function() {
		$(this).css("background-color", "#353434");
	},function() {
		$(this).css("background-color", "#191818");
	});

    $("#menu-select").hover(function() {
		$("#imgselect").slideDown( 200, "linear" );
	}, function() {
        $("#imgselect").slideUp( 200, "linear" );
    });	

	$("#imgselect td").hover(function() {
		$(this).css("opacity", "0.8");
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
			$(".rec p").css("display", "block");
			$("#collapse p").html("Collapse all");
			hiddenstate=false;
		} else {
			$(".rec p").css("display", "none");
			$("#collapse p").html("Expand all");
			hiddenstate=true;
		}
	});

    // show/hide rec categories
    var moeState = true;
    $("#toggleMoe").click(function() {
        if (moeState == true) {
            $(".moerec").toggle();
            $("#toggleMoe p").text("Show moe recs");
            moeState=false;
        } else {
            $(".moerec").toggle();
            $("#toggleMoe p").html("Hide moe recs");
            moeState=true;
        }
    });
    
    var oldState = true;
    $("#toggleOld").click(function() {
        if (oldState == true) {
            $(".oldrec").toggle();
            $("#toggleOld p").text("Show old recs");
            oldState=false;
        } else {
            $(".oldrec").toggle();
            $("#toggleOld p").html("Hide old recs");
            oldState=true;
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