const letters = ['A', 'B', 'C'];

// Recordar que son elementos por referencia.

// Agregar al final del array push

// Con push se puede agregar uno o varios elementos

// Agregar al comienzo unshift.

// Con unshift se puede agregar uno o varios elementos

// Modificar posición de una array

// Agregar elementos entre elementos existentes, insertar => splice: se le indica desde qué elemento quiero introducir
// (posicion_desde_la_que_quiero_introducir, elementos_que_eliminar, elementos_que_quiero_introducir)

// Eliminar elementos de un array final con pop => lo devuelve

// Eliminar elementos desde el principio con shift => lo devuelve

// Eliminar elementos internos con splice: se le indica desde qué elemento quiero eliminar
// (posicion_desde_la_que_quiero_introducir, elementos_que_eliminar)

// Vaciar Arrays:
// - [] => ¿Qué pasa si alguien más apunta al array anterior?, cuidado con eso
// -  => array.length = 0 => Funciona, es eficiente pero no es la más atractiva
// - splice => array.splice(0, array.length)
// - Loop, popeando cada elemento => La más lenta e ineficiente

// Crear copias de arrays con slice: ojo, por referencia

// Combinar y Dividir
// - Combinar con concat (es un método de Array). NO MODIFICA LOS ARRAYS, devuelve la combinación de los dos
// - Dividir con slice: (desde donde, hasta donde(no inclusive))

// Unir los elementos de un array con Join y separadores (opcionales), ejemplo ', '

// Separar string con split

// Ejemplo de uso, crear slug para una página web con split y join o replaceAll


// Ordenar con sort primitivos => Modifica el array originar
// - Números
// - Letras

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
