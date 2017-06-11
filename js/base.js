//TODO REPLACE funcion actual de citas por conexion con API (AJAX o getJSON)
var quotes = [
	["Tu margen es mi oportunidad", "Jeff Bezos"],
	["Cuando un sueño aparezca, ¡agárralo!", "Larry Page"],
	["Mi filosofía siempre ha sido ser el mejor, no ser el primero", "Tim Cook"],
	["Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso", "Bill Gates"],
	["La innovación distingue a los líderes de los seguidores", "Steve Jobs"],
	["El mayor riesgo es no correr ningún riesgo", "Mark Zuckerber"],
	["El mundo se puede cambiar en 140 caracteres", "Jack Dorsey"],
	["Creo que es posible que la gente normal elija ser extraordinaria", "Elon Musk"],
	["No tengas miedo de cambiar el modelo", "Reed Hastings"],
	["Cuando empieces a construir un producto, no asumas que sabes todas las respuestas. Escucha a la comunidad y adáptate a ella", "Chad Hurley"]
];

var colors = ['red', 'purple', 'deep purple', 'indigo', 'cyan', 'amber', 'deep orange', 'brown', 'grey', 'teal'];
var rand = 0;

//TODO DEBUG funcion para incorporar transiciones suaves entre cambios de colores
$(document).ready(function () {
	$('#texto').text(quotes[0][0]);
	$('cite').text(quotes[0][1]);
	$('#btn-qt').on("click", function () {
		rand = Math.floor(Math.random() * colors.length);
		$('body').css("background-color", colors[rand]);
		$('h2').css("color", colors[rand]);
		$('cite').css("color", colors[rand]);
		$('#btn-twitter').css("background", colors[rand]);
		$('#btn-qt').css("background", colors[rand]);
		$('#btn-tumblr').css("background", colors[rand]);
		$('#texto').text(quotes[rand][0]);
		$('cite').text(quotes[rand][1]);
	});
	$('#btn-twitter').on("click", function () {
		window.open('https://twitter.com/intent/tweet?text= ' + quotes[rand][0] + " - " + quotes[rand][1]);
	});
});









