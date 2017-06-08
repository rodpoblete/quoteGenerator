$(document).ready(function () {
	var colors = ['#151e3f', '#030027', '#f2f3d9', 'dc9e82', '#c16e70'];
	var rand = Math.floor(Math.random() * colors.length);
	$('body').css("background-color", colors[rand]);
	$('h2').css("color", colors[rand]);
	$('cite').css("color", colors[rand]);
	$('#btn-twitter').css("background", colors[rand]);
	$('#btn-qt').css("background", colors[rand]);
	$('#btn-tumblr').css("background", colors[rand]);
});
