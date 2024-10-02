import { createConnection } from "typeorm"; //lo que esta entr {} es para desestructurar un metodo, en este caso createConnection
import path from 'path';

export async function connect() {
    await createConnection({
        type: 'postgres',//tipo de bd
        port: 5432, //5432 es el puerto por defecto
        username: 'postgres',
        password: 'pass',
        database: 'nodejs-course',//nombre de la bd
        entities:[
            path.join(__dirname, '../entity/**/**.ts'),//__dirname: nombre del directorio, nombre de la ruta y cita todos los archivos que sean .ts
        ],// listado de las rutas locales donde van a estar las entidades que vamos a crear (en la carpeta entity)+
        synchronize : true,//propiedad
    })
    console.log("Database runing");
}