//este archivo configura nuestro servidor 
import express from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql'

import { BookResolver } from './resolvers/book.resolver';


//funcion asincrona 
export async function startServer(){
    //inicializamos express, con esto solo inicializamos un servidor http 
    const app: express.Application = express();
;

    //instanciar un objeto de la clase apolloserver, por parametro un objeto 
    const apolloServer = new ApolloServer({
        schema : await buildSchema({ resolvers: [BookResolver] })
    });

    await apolloServer.start();//levantar el servidor

    apolloServer.applyMiddleware({ app, path: '/graphql' })//nuestro apollo se va a ejecutar dentro del servidor express, se pasa la ruta

    return app;
};