// document.write("<h1>Hello World</h1>")

// //Tipos De Datos

// "Hello World"   // String
// 'Hello World'  // String

// 10000000  //Number
// 1000.2    //Number
// 5         //Number
// -3        //Number
// 4         //Number
// 2         //Number


// true       //Boolean
// false      //Boolean



// // Array
// ['joe', 'ryan', 'martha']    //Array - Arreglos
// [1, 2, 3]    //Array - Arreglos
// [true, false, true, false]    //Array - Arreglos



// // Object 


// {
//     "username": 'Welington',
//     "score":  80.4,
//     "hours": 16,
//     "professional": true
// }

// console.log('Esto Es una cadena')
// console.log(15)
// console.log(true)
// console.log({username: 'Welington', score: 80.4, hours: 16, professional: true})


// Variables

// var nombreDelUsuario = 'Welington '; //Var

// let apellido = 'Santos'; //let 
// nombreDelUsuario = 'Welington Manuel ';
// apellido = 'Villar Santos ';


// const edad = 15;  //Const - Constante


// // camelCase 
// let userName = 'ElFlaco08'  // camelCase 



// console.log(nombreDelUsuario + apellido + "Edad " + edad)
// console.log("Usuario: " + userName)


// Operandos Numeros  --Concatenacion


let numberOne = 60;
let numberTwo = 100;

let resultado = numberOne + numberTwo;
resultado = numberOne - numberTwo;
resultado = numberOne * numberTwo;
resultado = numberOne / numberTwo;

console.log(resultado)


// Operandos String  --Concatenacion

let nombre = 'Welington ';
let apellido = 'Santos';

let resultado2 = nombre + apellido;
console.log(resultado2)



// Comparadores

let numberUno = 34;
let numberDos = 33;

let resultado3 = numberOne > numberDos;  // Mayor Que
resultado3 = numberOne < numberDos;      // Menor Que
resultado3 = numberOne >= numberDos;     // Mayor o igual que
resultado3 = numberOne <= numberDos;     // Menor o Igual que
resultado3 = numberOne == numberDos;     // Igual
resultado3 = numberOne === numberDos;    // Igualdad
resultado3 = numberOne != numberDos;     // Diferencia -- diferente

console.log(resultado3)




// Condicionales 

let passwordDB = 'pepe123';
let input = 'pepe123';

let resultado4 = input == passwordDB;


if (resultado4 == true) {
    console.log('Login Correcto')
}

else {
    console.log('Login Incorrecto')    
}


let score = 70;

if (score > 30) {
    console.log('Necesitas Practicar Mas')
} else if(score > 15){
    console.log('Estas mejorando')
} else {
    console.log('Necesitas ver tutoriales para entender el juego')
}


// switch

let typeCard = 'Debid Card';

switch(typeCard) {
    case 'Debid Card':
        console.log('Esta Es una Tarjeta de Debito')
    break;
    case 'Debid Card':
        console.log('Esta Es una Tarjeta de Debito')
    break;
    default:
        console.log('No Card')

}