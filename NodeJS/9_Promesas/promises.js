//es un objeto que representa la terminacion o el fracaso eventual 
//de una operación asíncrona 
//aca se reciben objetos que tienen funnciones callbacks

/*
Sintaxis

const promise = new Promise(callback)
function(resolve, reject){
resolve() //si cumple
reject() //si no se cumple (error)}

then():devuelve la informacion que se consulto (solo se tiene disponible si entra en el metodo resolve)
catch(): captrurar el error (solo se tiene disponible si entra en el metodo reject)
finally(): se ejecuta ya sea que entro en el metodo resolve() o reject() (se tiene disponible en los dos metodos, reject o resolve)
*/

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
function getMoviesById(id){//generando la promesa, la sintxis
    return new Promise((resolve, reject) => {//resolve: exito en la promesa, reject: error
        const movie = moviesDB.find(movie => movie.id === id);
        if(!movie) reject(new Error("Movies does not exist"));
        resolve(movie);//en caso de que la encuentre
    })
};

function getActorById(id){
    return new Promise((resolve, reject) =>{
        const actor = actorsDB.find(actor => actor.id === id);
        if(!actor) reject(new Error("Actor does not exist"));
        resolve(actor);
    })
};

//como si fuera un join en sql
function getCompleteMovieById(movieId) {
    getMoviesById(movieId)//busca la pelicula
        .then(movie => {//pide la data que getMoviesById le pasa en el resolve(movie)
            getActorById(movie.mainActor)//busca el actor
                .then(actor => {//ya tenemos el actor
                    console.log(`La pelicula elegida es ${movie.title}, y su actor principal es ${actor.name}`)
                })
        })//finaliza el then()
        .catch(error => console.log(error))
        .finally(() => console.log("Operation Finished"))
}

getCompleteMovieById(1);