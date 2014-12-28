$(document).ready(function() {
    $("#imgselect img").hover(function() {
		$(this).css("opacity", "0.7");
	},function(){
		$(this).css("opacity", "1");
	})
});

function mascot(waifu) {
	switch (waifu) {
		case 0: waifuimg = "url('')"; break; //none
		case 1: waifuimg = "url('http://i.imgur.com/VXXYT9I.png')"; break; //kirino
		case 2: waifuimg = "url('http://i.imgur.com/KegubF6.png')"; break; //akarin
		case 3: waifuimg = "url('http://i.imgur.com/yc9ePPU.png')"; break; //tsurugi
		case 4: waifuimg = "url('http://i.imgur.com/stRfQqX.png')"; break; //nils
		case 5: waifuimg = "url('http://i.imgur.com/f0Dv1vX.png')"; break; //asuka
		case 6: waifuimg = "url('http://i.imgur.com/q5oOKVG.png')"; break; //mayaka
		case 7: waifuimg = "url('http://i.imgur.com/CIsG3Wu.png')"; break; //shinobu
		case 8: waifuimg = "url('http://i.imgur.com/t7BCAd4.png')"; break; //lain
	}
	$("body").css("background-image", waifuimg);
}
