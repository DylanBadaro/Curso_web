import { startServer } from "./server";


//funcion asincrona
async function main(){
    const port: number = 4000; //puerto donde se corre la app
    const app = await startServer(); 
    app.listen(port);//que app escuche el puerto
    console.log("app running on port ", port);
}
main();