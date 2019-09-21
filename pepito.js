var http = require("http");
var fs = require("fs");

var servidor = http.createServer( procesar );

servidor.listen(2000, function(){
	console.log("estoy escuchando desde el puerto 2000")
});

function procesar(request, response) {
	//response.write("<p>hola mundo desde <strong>pepito.js</strong> :D</strong>");
	//response.end(`<p>Usted quiere el siguiente recurso: ${request.url.substr(1)}</p>`);
	
	fs.readFile(request.url.substr(1), function(error, archivo){
		if (error){
			response.end("Archivo no encontrado:(")
		} else {
			response.end(archivo)
		}
	})

}




