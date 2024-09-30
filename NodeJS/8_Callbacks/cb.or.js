//Callbacks
//es una funcion que recibe otra funcion para que luego se ejecute, luego de haber ejecutado otro codigo 

const sayHello = () => console.log("Hello World!");

//setTimeout(sayHello,2000);//espera 2000 milisegundos para ejecutar la funcion 

const calculate = (arg1, arg2, cbOperation) => {//cbOperation es donde va la funcion callback
    console.log("Calculando...");
    return console.log(cbOperation(arg1 , arg2));//retornar la ejecucion de esta callback
}

const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

calculate(5, 2, multiply); // funcion callback es sum
//calculate(5, 2, (num1, num2) => num1 + num2);

