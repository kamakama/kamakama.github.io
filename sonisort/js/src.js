$(document).ready(function() {
	
	$("#menu-restart, #btn-rawtext").hover(function() {
		$(this).css("background-color", "#353434");
	},function() {
		$(this).css("background-color", "#191818");
	});
	
	$("tbody td").hover(function() {
		$(this).css("background-color", "#353434");
	}, function() {
		$(this).css("background-color", "#2B2B2B");
	});
	
	$("#menu-restart").click(function() {
		location.reload();
	});
	
});
		

