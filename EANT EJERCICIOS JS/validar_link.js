var links = document.querySelectorAll("nav > a"); // > especifica que el siguiente elemento es su hijo.s

console.log(links);

/*Funcion Nominada (no tiene nombre)*/

links.forEach(function(link){

	console.log("El argumento 'link' contiene:");
	console.log(link);

	link.onclick = function(evento){

		evento.preventDefault();
		console.log(evento);

		var rta = confirm("¿Esta seguro que desea abandonar el sitio?");
		if( rta ) { //ir a la pagina correspondiente
			console.log("Ahora deberia ir a:")
			console.log(evento.target.href)
			window.location.href = evento.target.href //ir a donde iria el elemento clickeado
		} else {
			alert("gracias por quedarse");
		}
	}
})

/*Funcion Nominada (tiene nombre)
function clickEvent(link){
	console.log("en el argumento 'link' hay:");}
	console.log(link)
}*/