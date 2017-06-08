$(document).ready(function () {
	$('#btn-qt').on("click", function () {
		var colors = ['#151e3f', '#030027', '#f2f3d9', 'dc9e82', '#c16e70'];
		var rand = Math.floor(Math.random() * colors.length);
		$('body').css("background-color", colors[rand]);
		$('h2').css("color", colors[rand]);
		$('cite').css("color", colors[rand]);
		$('#btn-twitter').css("background", colors[rand]);
		$('#btn-qt').css("background", colors[rand]);
		$('#btn-tumblr').css("background", colors[rand]);
	})
});

$(document).ready(function () {
	$('#btn-qt').on("click", function () {
		var quotes = [
			["Tu margen es mi oportunidad", "Jeff Bezos"],
			["Cuando un sueño aparezca, ¡agárralo!", "Larry Page"],
			["Mi filosofía siempre ha sido ser el mejor, no ser el primero", "Tim Cook"],
			["Está bien celebrar el éxito, pero es más importante prestar atención a las lecciones del fracaso", "Bill Gates"],
			["La innovación distingue a los líderes de los seguidores", "Steve Jobs"]
		];
		var randQt = Math.floor(Math.random() * quotes.length);
		$('#texto').text(quotes[randQt][0]);
		$('cite').text(quotes[randQt][1]);
	})
});




