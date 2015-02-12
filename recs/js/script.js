$(document).ready(function() {

    //build site
    $.getJSON( "data/data.json", function(data) {
    
        //build mascots
        var mascots = data.mascots;
        var itemsMascots=[];
        var checkNewTR = 0;
        $.each( mascots, function( index, value ) {
            if (checkNewTR % 4 == 0) { itemsMascots.push("<tr>"); }
            itemsMascots.push("<td><img class='mascot' alt='"+ value + "' src='img/thumb/selection_" + value + ".jpg'></td>");
            if (checkNewTR % 4 == 0) { itemsMascots.push("</tr>"); }
            checkNewTR++;
        });
        $("#imgselect").append(itemsMascots);
        var oldMascot="";
        function randomMascot() {
            var newMascot = mascots[Math.floor(Math.random() * mascots.length)];
            while ((newMascot==oldMascot) || (newMascot=="none") || (newMascot=="random")) {
                newMascot=mascots[Math.floor(Math.random() * mascots.length)];
            }
            oldMascot = newMascot;
            return newMascot
        }
        var mascot=randomMascot();
        $("body").css("background-image", "url('img/mascot/"+mascot+".png')");
    
        //build recs
        var itemsRecs=[];
        $.each( data.recs, function ( recclass, recobj ) {
            $.each( recobj , function( i, value ) {
                if (value["description"] == "gogaudio") {
                    itemsRecs.push( "<div class='rec " + recclass + "'><h3 id='vocaroo-nils'>" + value["title"] + "</h3></div>");
                } else {
                    itemsRecs.push( "<div class='rec " + recclass + "'><h3>" + value["title"] + "</h3><p>" + value["description"] + "</p></div>");
                }
            });
        });
        $("#recs").append(itemsRecs);
        
        //import video.js
        $("head").append("<script type='text/javascript' src='http://vjs.zencdn.net/4.11/video.js'></script>");

        //change displayed mascot on click
        $(".mascot").click(function() {
            if ($(this).attr("alt")=="random") {
                mascot=randomMascot();
            } else {
                mascot=$(this).attr("alt");
            }
            $("body").css("background-image", "url('img/mascot/"+mascot+".png')");
        });
        
        //preload mascots
        function preload(images) {
            var img = "";
            $(images).each(function () {
                img = "img/mascot/" + this + ".png";
                $('<img />').attr('src',img).appendTo('body').css('display','none'); 
            });
        }
        preload(mascots);
        
        //apply effects to mascot selection
        $("#imgselect td").hover(function() {
            $(this).css("opacity", "0.8");
        },function() {
            $(this).css("opacity", "1");
        });
        
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
            {name: "nyanpass", volume: 0.2}, 
            {name: "nils"}, //http://vocaroo.com/i/s0wSeD9kqTkZ
            {name: "naruto"},
            ],
        volume: 1,
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
    
    $('<img />').attr('src','img/naruto/naruto1.png').appendTo('body').css('display','none'); 
    //believe it button
    $("#menu-believeit").click(function() {
        if ($("#menu-believeit").html() == "Believe it") {
            $.ionSound.play("naruto", { loop: true });
            $(".mascot").attr("src", "img/naruto/selection_naruto.jpg");
            
            $.getJSON( "data/naruto.json", function(data) {
                $("#recs").html("");
                //build recs
                var itemsRecs=[];
                $.each( data.recs, function ( recclass, recobj ) {
                    $.each( recobj , function( i, value ) {
                        if (value["description"] == "gogaudio") {
                            itemsRecs.push( "<div class='rec " + recclass + "'><h3 id='vocaroo-nils'>" + value["title"] + "</h3></div>");
                        } else {
                            itemsRecs.push( "<div class='rec " + recclass + "'><h3>" + value["title"] + "</h3><p>" + value["description"] + "</p></div>");
                        }
                    });
                });
                $("#recs").append(itemsRecs);
                
                //apply effects to rec elements        
                $(".rec h3").hover(function() {
                    $(this).css("background-color", "#646972");
                },function() {
                    $(this).css("background-color", "#4b4a4a");
                });
                $(".rec h3").click(function() {
                    $("p", $(this).parent(".rec")).slideToggle( 200, "linear" );
                });
                
                //change mascot click to NARUTO
                $("body").css("background-image", "url('img/naruto/naruto1.png')");
                $(".mascot").unbind("click");
                
                var naruto = data.mascots;
                var narutoIndex = 1;

                $(".mascot").click(function() {
                    $("body").css("background-image", "url('img/naruto/"+naruto[narutoIndex%naruto.length]+".png')");
                    narutoIndex++;
                });
                
                //preload narutos
                var img = "";
                $(naruto).each(function () {
                    img = "img/naruto/" + this + ".png";
                    $('<img />').attr('src',img).appendTo('body').css('display','none'); 
                });
                
            });
            $("#menu-believeit").html("no going back");
        }
    });
    
});