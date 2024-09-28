/*const {EventEmitter} = require('events');

otra forma es como esta comentado

const emitter = new EventEmitter();*/


const Emitter = require('./events');

const emitter = new Emitter();

//registro el evento
emitter.on('save', ({date}) => {//llamo al metodo 
    console.log(' *** event firded *** ', date);//devuelve numero con enteros
});

setInterval(() => {//se va a ejecutar cada 1 seg
    //emito el evento
    emitter.emit('save', { date : Date.now()});//devuelve lo que va a hacer el console.log del registro de evento
}, 1000);//tiempo en milisegundos (1000: 1 seg)
//ejecutarlo en la terminal de javascript (ubica la termial en la carpeta video6)
