let letters = ['A', 'B', 'C'];

// Recordar que son elementos por referencia.

// Agregar al final del array push
letters.push('D');

// Con push se puede agregar uno o varios elementos
letters.push('Y', 'Z');

// Agregar al comienzo unshift.
letters.unshift(2);

// Con unshift se puede agregar uno o varios elementos
letters.unshift(0,1);

// Modificar posición de una array
letters[1] = '-';

// Agregar elementos entre elementos existentes, insertar => splice: se le indica desde qué elemento quiero introducir
// (posicion_desde_la_que_quiero_introducir, elementos_que_eliminar, elementos_que_quiero_introducir)
letters.splice(5, 0, '.', '.');

// Eliminar elementos de un array final con pop => lo devuelve
letters.pop()

// Eliminar elementos desde el principio con shift => lo devuelve
letters.shift();

// Eliminar elementos internos con splice: se le indica desde qué elemento quiero eliminar
// (posicion_desde_la_que_quiero_introducir, elementos_que_eliminar)
letters.splice(2, 4);

// Vaciar Arrays:
// - [] => ¿Qué pasa si alguien más apunta al array anterior?, cuidado con eso
// let otherArray = letters;
// letters = [];

// -  => array.length = 0 => Funciona, es eficiente pero no es la más atractiva
// letters.length = 0;

// - splice => array.splice(0, array.length)
// letters.splice(0, letters.length);

// - Loop, popeando cada elemento => La más lenta e ineficiente
// let size = letters.length;
// for (let i = 0; i < size; i++){
//   letters.pop();
// }
// console.log(letters);

// Crear copias de arrays con slice: ojo, por referencia
// console.log(letters);
// let otherLetters = letters.slice(2,4);
// console.log(otherLetters);

// Combinar y Dividir
// - Combinar con concat (es un método de Array). NO MODIFICA LOS ARRAYS, devuelve la combinación de los dos
// const l1 = [1, 2, 3, 4];
// const l2 = [10, 20, 30, 40];
// const juntos = l1.concat(l2);
// console.log(juntos);

// Unir los elementos de un array con Join y separadores (opcionales), ejemplo ', '
// let palabras = [1,2,3,4,5,6];
// let junto = palabras.join(', ');
// console.log(junto);

// Separar string con split
// let title = 'Mi primer post sobre Javascript';
// let slug = title.split(' ').join('-');
// Ejemplo de uso, crear slug para una página web con split y join o replaceAll
// console.log(slug);
// console.log(title.replaceAll(' ', '-'));



// Ordenar con sort primitivos => Modifica el array originar
// - Números
// - Letras
// let numbers = [1, 8, 6, 4, 7];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

let zLetters = ['Z', 'A', 'a', 'h'];
console.log(zLetters);
zLetters.sort()
console.log(zLetters);



// Ordenar con Sort con arrow function personalizada
// - Función Callback
// Los parámetros se suelen llamar a y b
/**
 * a primero que b => devolver -1
 * b primero que a => devolver 1
 * iguales => devolver 0
 */

// Ordenar objetos con Arrow Functions

// Buscar primitivos dentro de un array con indexOf
// Buscar valores por referencia en un array con find (devuelve el primer elemento que cumple la condición)
// Buscar valores por referencia en un array con findIndex (devuelve el primer elemento que cumple la condición)
