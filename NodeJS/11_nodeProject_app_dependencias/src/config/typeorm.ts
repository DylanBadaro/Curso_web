import { createConnection } from "typeorm"; //lo que esta entr {} es para desestructurar un metodo, en este caso createConnection
import path from 'path';

import { environment  } from "./environment";


export async function connect() {
    await createConnection({
        type: 'postgres',//tipo de bd
        port: Number(environment.DB_PORT), //5432 es el puerto por defecto 
        username: environment.DB_USERNAME,
        password: environment.DB_PASSWORD,
        database: environment.DB_DATABASE,//nombre de la bd
        entities:[
            path.join(__dirname, '../entity/**/**.ts'),//__dirname: nombre del directorio, nombre de la ruta y cita todos los archivos que sean .ts
        ],// listado de las rutas locales donde van a estar las entidades que vamos a crear (en la carpeta entity)+
        synchronize : true,//propiedad
    })
    console.log("Database runing");
}

/*
port: 5432,
username: 'postgres',
password: 'pass',
database: 'nodejs-course',
*/