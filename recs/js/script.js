$(document).ready(function() {
    $("#imgselect img").hover(function() {
		$(this).css("opacity", "0.7");
	},function(){
		$(this).css("opacity", "1");
	})
});

// change displayed mascot
function mascot(waifu) {
	switch (waifu) {
		case 0: waifuimg = "url('')"; break;
		case 1: waifuimg = "url('img/kirino.png')"; break;
		case 2: waifuimg = "url('img/akari.png')"; break;
		case 3: waifuimg = "url('img/tsurugi.png')"; break;
		case 4: waifuimg = "url('img/nils.png')"; break;
		case 5: waifuimg = "url('img/asuka.png')"; break;
		case 6: waifuimg = "url('img/mayaka.png')"; break;
		case 7: waifuimg = "url('img/shinobu.png')"; break;
		case 8: waifuimg = "url('img/lain.png')"; break;
	}
	$("body").css("background-image", waifuimg);
}
