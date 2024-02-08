/* Ejercicio 1

Crea un nuevo array donde cada elemento del array original se duplique

*/

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);
// let doubleNumbers = numbers.map(n => n * 2);
// console.log(doubleNumbers);

/* Ejercicio 2

Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.

*/


/* Ejercicio 3

Crea un nuevo array que contenga solo los números pares del array original.

*/

// let numbers = [1, 2, 3, 4, 5, 6];
// let pares = numbers.filter(n => n % 2 === 0);
// console.log(pares);


/* Ejercicio 4

Pide al usuario que ingrese un número y verifica si está presente en el array.

*/

// let numbers = [1, 2, 3, 4, 5, 6];
// let userNumber = parseInt(prompt("Introduce un número"));
// if (numbers.includes(userNumber)) {
//   console.log('El número está en el array')
// } else {
//   console.log('El número NO está en el array')
// }


/* Ejercicio 5

Ordena el array de números en orden descendente y imprímelo.

*/

// let numbers = [1, 2, 4, 7, 5, 6];
// console.log(numbers.sort().reverse())


/* Ejercicio 6

Dado dos arrays de números, array1 y array2, crea una función que devuelva un nuevo array juntando los dos que contenga los elementos que son múltiplos de 3 y no sean múltiplos de 5. Además, asegúrate de que el nuevo array no contenga duplicados.

*/

// const array1 = [2, 3, 5, 9, 12, 15];
// const array2 = [4, 6, 9, 12, 18, 20];

// let newArray = array1.concat(array2);

// const noMultiplos = newArray.filter(n => n % 3 === 0 && n % 5 !== 0);
// console.log(noMultiplos);

/* Ejercicio 7: Filtrar y transformar datos en un array

Dado un array de objetos que representan libros, cada objeto tiene propiedades como título, autor y año de publicación.

Filtra los libros que fueron publicados después de 2000
y crea un nuevo array con los títulos de esos libros en mayúsculas.

*/

// const libros = [
//   {
//     titulo: 'El señor de los anillos',
//     autor: 'J.R.R. Tolkien',
//     year: 1954
//   },
//   {
//     titulo: 'Harry Potter y la piedra filosofal',
//     autor: 'J.K. Rowling',
//     year: 1997
//   },
//   {
//     titulo: 'Cien años de soledad',
//     autor: 'Gabriel García Márquez',
//     year: 1967
//   },
//   {
//     titulo: 'El código Da Vinci',
//     autor: 'Dan Brown',
//     year: 2003
//   },
//   {
//     titulo: '1984',
//     autor: 'George Orwell',
//     year: 1949
//   },
//   {
//     titulo: 'El hobbit',
//     autor: 'J.R.R. Tolkien',
//     year: 1937
//   },
//   {
//     titulo: 'Los juegos del hambre',
//     autor: 'Suzanne Collins',
//     year: 2008
//   },
// ];

// const librosPost2000 = libros.filter(libro => libro.year > 2000);
// const titleUp = librosPost2000.map(libro => libro.titulo.toUpperCase());
// console.log(titleUp);


/* Ejercicio 9

Filtra los estudiantes que tienen una edad mayor o igual a 18 años y guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.

*/

// const estudiantes = [
//   { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
//   { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
//   { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
//   { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
//   { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
//   { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
//   { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
// ];

// const estudiantesMayoresDeEdad = estudiantes.filter(estudiante => estudiante.edad >= 18);
// console.log(estudiantesMayoresDeEdad);


/*
  Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.
*/

// let promediosCalificaciones = estudiantesMayoresDeEdad.map(estudiante => {
//   let suma = estudiante.calificaciones.reduce((media, nota) => {
//     return media + nota;
//   }, 0);
//   return {
//     ...estudiante,
//     media: suma / estudiante.calificaciones.length
//   }
// });

// console.log(promediosCalificaciones);

// let mayorMedia = promediosCalificaciones.reduce((mayorNota, estudiante) => {
//   if (estudiante.media > mayorNota.media) {
//     return estudiante;
//   }
//   return mayorNota;
// },promediosCalificaciones[0])
// console.log(mayorMedia);


/* Ejercicio 10

Filtra las ventas que tienen una cantidad mayor a 8 unidades y guárdalas en un nuevo array llamado ventasElevadas.


Calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y almacena los resultados en una nueva clave de cada objeto en un nuevo array llamado ingresosTotales.


Encuentra la venta con el ingreso total más alto en el array ingresosTotales y muestra el producto y el ingreso total en la consola.


Ordena el array original ventas de manera ascendente según la cantidad de productos vendidos.

*/

const ventas = [
    { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
    { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
    { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
    { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
    { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
];

const ventasElevadas = ventas.filter(venta => venta.cantidad > 8);
const totalIngresos = ventas.map(venta => {
  return {
    ...venta,
    subtotal: venta.cantidad * venta.precioUnitario
  }
});

const mayorVenta = totalIngresos.reduce((ventaMayor, venta) => {
  if (venta.subtotal > ventaMayor.subtotal) return venta;

  return ventaMayor;
}, totalIngresos[0])
console.log(totalIngresos);
console.log(mayorVenta);

const ventasOrdenadas = ventas.sort((a, b) => b.cantidad - a.cantidad);
console.log(ventasOrdenadas);
