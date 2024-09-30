const http = require('http');

const host = 'localhost' ;
const port = 3000;

//esta funcion escucha y responde
const requestListener = function(req,res) {
//req: maneja peticion entrante (viene del cliente) || res: manda la respuesta
    res.writeHead(200);
    res.end("Hello ds");
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log("App runing on port: ", port);
});


/* server recibe requestListener (rutas), luego se pone a escuchar con server listen*/
//para ejecutar node server.js
