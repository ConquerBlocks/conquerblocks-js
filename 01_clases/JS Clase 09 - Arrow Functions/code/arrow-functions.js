// function saludo() {
//   return 'Hola qué tal estás';
// }

// function saludo2(nombre) {
//   return `Hola qué tal estás ${nombre}`;
// }

// function saludo3(nombre, apellido) {
//   return `Hola qué tal estás ${nombre} ${apellido}`;
// }

// Diferencias
// - No tiene la palabra function
// - No tiene acceso a this (ya hablaremos más adelante sobre this)
// - No tiene el objeto arguments como en las funciones tradicionales
// - Siempre son anónimas
// - No son afectadas por el Hoisting, es decir, no pueden llamarse antes de declararse

// Definición de nuestra primera Arrow Function
// function saludo() {
//   return 'Hola qué tal estás';
// }

// const saludo = () => {
//   return 'Hola qué tal estás';
// }

// console.log(saludo());


// Return implícito (sin llaves)
// const saludo = () => 'Hola qué tal estás';

// console.log(saludo());

// Parámetros
// function saludo2(nombre) {
//   return `Hola qué tal estás ${nombre}`;
// }

// const saludo2 = (nombre) => `Hola qué tal estás ${nombre}`;
// const saludo3 = (nombre, apellido) => `Hola qué tal estás ${nombre} ${apellido}`;

// console.log(saludo2('Bienve'));
// console.log(saludo3('Bienve', 'Sáez'));

// Único parámetro, omitiendo paréntesis
// const saludo2 = nombre => `Hola qué tal estás ${nombre}`;

// console.log(saludo2('Juan'));
