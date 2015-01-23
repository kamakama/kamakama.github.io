$(document).ready(function() {
	
	$("#menu-restart, #menu-recs, #btn-rawtext").hover(function() {
		$(this).css("background-color", "#353434");
	},function() {
		$(this).css("background-color", "#191818");
	});
	
	$("#fldLeft, #fldMiddleT, #fldRight, #fldMiddleB").hover(function() {
		$(this).css("background-color", "#353434");
	}, function() {
		$(this).css("background-color", "#2B2B2B");
	});
	
	$("#menu-restart").click(function() {
		location.reload();
	});
	
	$("#menu-recs").click(function() {
		location.href='../recs/index.html';
	});
	
});
		

