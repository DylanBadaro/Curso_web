import { startServer } from "./server";//desestructurar el metodo startServer
import { connect } from './config/typeorm';//desestructurar el metodo conect


//funcion asincrona
async function main(){
    connect();
    const port: number = 4000; //puerto donde se corre la app
    const app = await startServer(); 
    app.listen(port);//que app escuche el puerto
    console.log("app running on port ", port);
}
main();