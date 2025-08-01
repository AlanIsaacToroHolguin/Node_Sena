const http = require("http");
const servidor = http.createServer((solicitud,respuesta)=> {
    respuesta.writeHead(200,{"content-Type": " text-plain"});
    //respuesta,write("peimera linea de la respiesta");
    //respuesta.write("segunda linea de la respuesta");
    respuesta.end("¡Hola desde node.js!");
});
servidor.listen(3000, () =>{
    console.log("Servidor escuchandose desde http://localhost:3000");
});