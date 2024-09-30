/*Async cuando se llama una función async ésta devuelve un elemento Promise. 
Cuando la función saync devuelve un valor, Promise se resolverá con el valor
devuelto. Si la función async genera una excepción o algún valor, Promise
rechazará el valor generado

Await Pausa la ejecucuón de la función asíncrona y espera la resolución de 
la Promise pasada y, a continuación, reanuda la ejecución de la función async 
y devuelve el valor resuelto después del término

El metodo async/await no tiene un método catch, por lo que siempre debemos 
utilizar la sintáxis try/catch para manejar las excepciones*/

//simular operaciones de una base de datos 
const moviesDB = [
    {
        id: 1,
        title: "Nueve Reinas",
        mainActor: 2,
    },
    {
        id: 2,
        title: "El Secreto de sus ojos",
        mainActor: 1,
    },
    {
        id: 3,
        title: "Cinema Paradiso",
        mainActor:3
    },
];
const actorsDB = [
    {
        id : 1,
        name: "Guillermo Francella",
    },
    {
        id: 2,
        name: "Ricardo Darín",
    },
    {
        id: 3,
        name: "Jose Perez"
    },
];

//obtener movie por medio del id
async function getMoviesById(id){
    try{
        const movie = await moviesDB.find(movie => movie.id === id);//como esta linea es lo que la hace asincrona se agrega await
        //va a esperar a que la promesa sea resuelta para luego continuar con la ejecución
        if(!movie) throw new Error("Movies does not exist");//ya no se usa reject, ahora se usa throw
        return movie;//en caso de que la encuentre
    }catch{
        throw new Error(error.mesage);
    }
    
};//devuelve una promesa

async function getActorById(id){
    try{
        const actor = await actorsDB.find(actor => actor.id === id);
        if(!actor) throw new Error("Actor does not exist");
        return actor;
    }catch{
        throw new Error(error.message);
    }

};//devuelve una promesa

//como si fuera un join en sql
async function getCompleteMovieById(movieId) {
    try{
        const movie = await getMoviesById(movieId);//buscar la movie
        const actor = await getActorById(movie.mainActor);
        console.log(`La pelicula seleccionada es ${movie.title}, y su actor principal es ${actor.name}`);
    }catch(error){
        throw new Error(error.message);
    }
    
}

getCompleteMovieById(1);

//sintaxis mas comprensible 