// Creación de Strings
// Comillas simples
let miCadena = 'Esta es mi cadena';
// Comillas dobles
let otraCadena = "Esta es mi otra cadena"
// Backtips
let cadenaBack = `Esta es mi cadena`;

// Concatenación con +
let firstName = "Bienve";
let lastName = "Sáez";
let fullName = firstName + " " +  lastName;
// Concatenación con template literals
fullName = `Mi nombre completo es: ${firstName} ${lastName}`;
// Concatenación de array con join()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let frutas = fruits.join('');
// Concatenación con concat
firstName = "Bienve";
fullName = firstName.concat(" ", "Sáez");
console.log(fullName);

// Cómo escapar caracteres, por ejemplo ' o ". Alternando comillas o con caracter de escape o template literals
let c = `Esto es una " do I'm from Motril`;
c = "Esto es una \" do I\'m from Motril";

// Strings largos con saltos de línea
let poema = `Lorem ipsum dolor sit,
amet consectetur adipisicing
elit.Sapiente voluptates
delectus voluptatem.`;


// strings primitivos vs strings objects, son inmutables
// const stringPrimitivo = 'Soy un string primitivo'
// console.log(typeof stringPrimitivo);
// const stringObjeto = new String('Hola soy un string de tipo objeto')
// console.log(typeof stringObjeto);


// Métodos de string
let pruebas = "Hola que tal estás";
console.log(pruebas.length);
console.log(pruebas.includes('tal'));


//If, else , else if
let edad = 21;
if (edad >= 18) {
  console.log("Es mayor de edad");
} else if(edad >=13) {
  console.log("Es adolescente");
} else {
  console.log("Es menor de 13 años");
}

// Condicional ternario
edad = 21;
let mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad;"
console.log(mensaje);


// Switch
firstName = 'Bienve';

switch (firstName.length) {
  case 6:
    console.log("Su nombre tiene 6 caracteres");
    break;
  case 2:
    console.log("Su nombre tiene 2 caracteres");
    break;
  default:
    console.log(`Su nombre no tiene ni 2 ni 6 caracteres, tiene ${firstName.length} caracteres`);
}

// While
let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}


// Do
contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 10);


// For
for (let i = 0; i < 10; i++){
  console.log(i);
}
