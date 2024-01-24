const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16
  }
];


// Spread operator con objetos para añadir propiedades o para juntar dos objetos en uno
// let ciudad = {
//   nombreCiudad: 'Motril',
//   habitantes: 60000
// }
// let alumno1 = {
//   ...alumnos[0],
//   ...ciudad
// }
// console.log(alumno1);


// Every => Evalúa si todos los elementos cumplen el predicado. Devuelve un Booleano. Comprobar iteraciones que hace

// Por ejemplo comprobar si todos los alumnos son mayores de edad
// let todosMayores = alumnos.every((alumno) => {
//   return alumno.edad > 17;
// });
// console.log(todosMayores);

// let todosMayores14 = alumnos.every((alumno) => {
//   return alumno.edad >= 15;
// });
// console.log(todosMayores14);


// Some => Evalúa si alguno de los elementos cumplen el predicado. Devuelve un Booleano. Comprobar iteraciones que hace.

// Por ejemplo comprobar si alguno es menor de edad de todos los alumnos. Se para en cuanto algún elemento ya devuelve true

// let hayMenores = alumnos.some((alumno) => {
//   console.log(`Evaluando a ${alumno.nombre} con edad ${alumno.edad}`);
//   return alumno.edad < 18;
// });

// console.log(`Hay menores: ${hayMenores}`);


// Filter
/**
 * Recibe una función con tres parámetros
 * elemento del array, índice, array sobre el que se está ejecutando. Comprobar en w3c
 * Devuelve un nuevo array con los valores que devuelven true en el predicado que le hemos puesto
 * Súper utilizado para manejar Arrays en nuestro día a día
*/

// Ejemplo, filtrar a los alumnos menores de edad
// let menores = alumnos.filter((alumno) => {
//   return alumno.edad < 18;
// })
// console.log(menores);

// let mayores = alumnos.filter((alumno) => {
//   return alumno.edad >= 18;
// })
// console.log(mayores);



// Map => Crea nuevos array de un array ya existente aplicándole una función a cada elemento.
/**
 * Recibe una función con tres parámetros
 * elemento del array, índice, array sobre el que se está ejecutando. Comprobar en w3c
 * Devuelve un nuevo array con el resultado de ejecutar una función sobre todos los elementos del array. Los elementos serán jústamente lo que devuelva la función interna en cada iteración
 * Súper utilizado para manejar Arrays en nuestro día a día
*/

// Por ejemplo obtener los cuadrados de un array
// const numeros = [1, 2, 3, 4, 5];

// const cuadrados = numeros.map((numero) => {
//   return numero * numero;
// });

// console.log(numeros);
// console.log(cuadrados);

// Imagínate que queremos crear un nuevo array con una propiedad booleana indicando si es mayor de edad o no. Usaremos spread operator
// const nuevosAlumnos = alumnos.map((alumno) => {
//   return {
//     ...alumno,
//     esMayor: alumno.edad >= 18
//   }
// });
// console.log(nuevosAlumnos);

// Imagínate que queremos construir una tabla en html con los alumnos
// Creamos los tr con los td's
// let trs = alumnos.map((alumno) => {
//   return `<tr><td>${alumno.nombre}</td><td>${alumno.edad}</td></td>`;
// });

// trs = trs.join('');
// let table = `<table>${trs}</table>`;
// console.log(table);

// Encadenamiento de métodos. Imagínate que quiero construir la tabla sólo con los alumnos mayores de edad. Primero filter y luego map ;-)
// let trs = alumnos
//   .filter((alumno) => alumno.edad >= 18)
//   .map((alumno) => {
//   return `<tr><td>${alumno.nombre}</td><td>${alumno.edad}</td></td>`;
// });

// trs = trs.join('');
// let table = `<table>${trs}</table>`;
// console.log(table);

// Reduce => se utiliza para reducir un array a un solo valor aplicando una función acumuladora a cada elemento del array. Es especialmente útil cuando necesitas sumar, multiplicar, concatenar o realizar alguna operación que combine los elementos del array en un valor único.

const numbers = [1, 2, 3, 4, 5];

const suma = numbers.reduce((acumulador, currentValue) => {
  return acumulador + currentValue*currentValue;
}, 0);

console.log(suma);



// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum); // Resultado: 15


// const words = ["Hola", " ", "mundo", "!"];

// const sentence = words.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// });

// console.log(sentence); // Resultado: "Hola mundo!"


// const values = [8, 3, 11, 6, 4];

// const max = values.reduce(function(accumulator, currentValue) {
//   return Math.max(accumulator, currentValue);
// });

// console.log(max); // Resultado: 11

// También podemos utilizarlo para, si tenemos un array de arrays, aplanarlo y ponerlo todo como un único arrays
