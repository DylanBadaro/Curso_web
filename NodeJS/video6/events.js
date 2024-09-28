function Emitter() {//esto va a ser un objeto, es decir, una clase
    this.events = {};//obejto vacio (nuestro objetos)
};


//metodo para registrar el evento
//.prototype: accedo y modifico su comportamiento y propiedades 
//.on: se invocan los eventos 
Emitter.prototype.on = function(type, listener) {//type: tipo de evento, listener: el que escucha y responde cuando el evento ocurre
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);//agrega el elemento al final del []
};//metodo registrar el evento



//metodo que lo emita
Emitter.prototype.emit = function (type, opts){
    if(this.events[type]){
        //ejecutar el listener
        this.events[type].forEach(listener => listener(opts))//Se ejecuta cada listener, porque se tiene un array de listener que estan DECLARADOS, no invocados, los () es para que se ejecute
    }
};//metodo que lo emita


module.exports = Emitter;