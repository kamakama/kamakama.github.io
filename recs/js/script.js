$(document).ready(function() {

	//initialize sound
	$.ionSound({
		sounds: [
            {name: "nyanpass"}, 
            {name: "nils", volume: 1}], //http://vocaroo.com/i/s0wSeD9kqTkZ
		volume: 0.2,
		path: "sounds/",
		preload: true
	});

	$("#menu-nyanpasu").click(function() { $.ionSound.play("nyanpass"); });
    $("#vocaroo-nils").click(function() { 
        if ($("#vocaroo-nils img").attr("src")=="img/play.png") {
            $.ionSound.play("nils", {
                onEnded: function() {
                    $("#vocaroo-nils img").attr("src", "img/play.png");
                }
            });
            $("#vocaroo-nils img").attr("src", "img/stop.png");
        } else {
            $.ionSound.stop("nils");
            $("#vocaroo-nils img").attr("src", "img/play.png");
        }
    });
	
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
	$("#menu-collapse").click(function() {
		if (hiddenstate == true) {
			$(".rec p").css("display", "block");
			$("#menu-collapse p").html("Collapse all");
			hiddenstate=false;
		} else {
			$(".rec p").css("display", "none");
			$("#menu-collapse p").html("Expand all");
			hiddenstate=true;
		}
	});

    // show/hide rec categories
    var moeState = true;
    $("#menu-toggleMoe").click(function() {
        if (moeState == true) {
            $(".moerec").toggle();
            $("#menu-toggleMoe p").text("Show moe recs");
            moeState=false;
        } else {
            $(".moerec").toggle();
            $("#menu-toggleMoe p").html("Hide moe recs");
            moeState=true;
        }
    });
    
    var oldState = true;
    $("#menu-toggleOld").click(function() {
        if (oldState == true) {
            $(".oldrec").toggle();
            $("#menu-toggleOld p").text("Show old recs");
            oldState=false;
        } else {
            $(".oldrec").toggle();
            $("#menu-toggleOld p").html("Hide old recs");
            oldState=true;
        }
    });
	
	// change displayed mascot on click
    var mascots = [
        "akari",
        "arisu",
        "asuka",
        "ayase",
        "cosplay",
        "kirino",
        "korbo",
        "maki",
        "mayaka",
        "miuna",
        "popura",
        "ryuuko",
        "shinobu",
        "tsurugi"
    ];

    function randomMascot() {
        return mascots[Math.floor(Math.random() * mascots.length)];
    }

    var mascot=randomMascot();
    $("body").css("background-image", "url('img/mascot/"+mascot+".png')");

	$(".mascot").click(function() {
        if ($(this).attr("alt")=="random") {
            do {
                var oldMascot = mascot;
                mascot=randomMascot();
            } while (mascot==oldMascot);
        } else {
            mascot=$(this).attr("alt");
        }
		$("body").css("background-image", "url('img/mascot/"+mascot+".png')");
	});
	
	$("#kirinolink").click(function() {
		$("body").css("background-image", "url('img/mascot/kirino.png')");
	});
	
	$("#ayaselink").click(function() {
		$("body").css("background-image", "url('img/mascot/ayase.png')");
	});
	
});