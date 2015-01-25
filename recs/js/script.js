$(document).ready(function() {

    //build site
    $.getJSON( "data.json", function(data) {
        var items=[];
        $.each( data.recs, function ( recclass, recobj ) {
            $.each( recobj , function( i, value ) {
                if (value["description"] == "gogaudio") {
                    items.push( "<div class='rec " + recclass + "'><h3 id='vocaroo-nils'>" + value["title"] + "</h3></div>");
                } else {
                    items.push( "<div class='rec " + recclass + "'><h3>" + value["title"] + "</h3><p>" + value["description"] + "</p></div>");
                }
            });
        });
        $("#recs").append(items);
        
        //apply effects to rec elements        
        $(".rec h3").hover(function() {
            $(this).css("background-color", "#646972");
        },function() {
            $(this).css("background-color", "#4b4a4a");
        });
        
        $(".rec h3").click(function() {
            $("p", $(this).parent(".rec")).slideToggle( 200, "linear" );
        });
        
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

        $("#kirino, #ayase").click(function() {
            $("body").css("background-image", "url('img/mascot/" + $(this).attr("id") + ".png')");
        });

    });

    //initialize sound
    $.ionSound({
        sounds: [
            {name: "nyanpass"}, 
            {name: "nils", volume: 1}, //http://vocaroo.com/i/s0wSeD9kqTkZ
            ],
        volume: 0.2,
        path: "sounds/",
        preload: true
    });
    $("#menu-nyanpasu").click(function() { $.ionSound.play("nyanpass"); });
    
    
    //hover effects
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
    var hiddenState = true;
    $("#menu-collapse").click(function() {
        if (hiddenState) {
            $(".rec p").css("display", "block");
            $("#menu-collapse").html("Collapse all");
            hiddenState=false;
        } else {
            $(".rec p").css("display", "none");
            $("#menu-collapse").html("Expand all");
            hiddenState=true;
        }
    });

    //show/hide rec categories
    var moeState = true;
    $("#menu-toggleMoe").click(function() {
        if (moeState) {
            $(".moerec").toggle();
            $("#menu-toggleMoe").text("Show moe recs");
            moeState=false;
        } else {
            $(".moerec").toggle();
            $("#menu-toggleMoe").html("Hide moe recs");
            moeState=true;
        }
    });
    
    var oldState = true;
    $("#menu-toggleOld").click(function() {
        if (oldState) {
            $(".oldrec").toggle();
            $("#menu-toggleOld").text("Show old recs");
            oldState=false;
        } else {
            $(".oldrec").toggle();
            $("#menu-toggleOld").html("Hide old recs");
            oldState=true;
        }
    });
    
    var airingState = true;
    $("#menu-toggleAiring").click(function() {
        if (airingState) {
            $(".airrec").toggle();
            $("#menu-toggleAiring").text("Show airing recs");
            airingState=false;
        } else {
            $(".airrec").toggle();
            $("#menu-toggleAiring").html("Hide airing recs");
            airingState=true;
        }
    });
    
    //change displayed mascot on click
    var mascots = [
        "akari",
        "arisu",
        "asuka",
        "ayase",
        "choi",
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
    
});