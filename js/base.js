var quotes = [
	["Tu margen es mi oportunidad", "Jeff Bezos"],
	["Cuando un sueño aparezca, ¡agárralo!", "Larry Page"],
	["Mi filosofía siempre ha sido ser el mejor, no ser el primero", "Tim Cook"],
	["Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso", "Bill Gates"],
	["La innovación distingue a los líderes de los seguidores", "Steve Jobs"]
];
//TODO DEBUG paleta de colores por material design colores HEX fuera
var colors = ['#151e3f', '#030027', '#f2f3d9', 'dc9e82', '#c16e70'];

//TODO DEBUG funcion para incorporar transiciones suaves entre cambios de colores
$(document).ready(function () {
	$('#texto').text(quotes[0][0]);
	$('cite').text(quotes[0][1]);
	$('#btn-qt').on("click", function () {
		var rand = Math.floor(Math.random() * colors.length);
		$('body').css("background-color", colors[rand]);
		$('h2').css("color", colors[rand]);
		$('cite').css("color", colors[rand]);
		$('#btn-twitter').css("background", colors[rand]);
		$('#btn-qt').css("background", colors[rand]);
		$('#btn-tumblr').css("background", colors[rand]);
	})
});

//TODO REPLACE funcion actual de citas por conexion con API (AJAX o getJSON)
$(document).ready(function () {
	$('#btn-qt').on("click", function () {
		/*$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function (a) {
		 $("#texto").text()
		 })*/
		var randQt = Math.floor(Math.random() * quotes.length);
		$('#texto').text(quotes[randQt][0]);
		$('cite').text(quotes[randQt][1]);
	})
});






