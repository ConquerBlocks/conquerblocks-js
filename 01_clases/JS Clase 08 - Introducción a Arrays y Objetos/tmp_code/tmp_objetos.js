// ¿Qué son los objetos?

// En JS no es necesario que haya una clase definida para que exista un objeto ya que se basa en propotipos. Ya lo veremos en profundidad

// Son tipo de referencia, se almacena una dirección de memoria

// ¿Para qué sirven y por qué son más intuitivos que los arrays?

// Vamos a definir propiedades de una persona
let firstName = 'Bienvenido';
let lastName = 'Sáez'
let age = 39;
let occupation = 'Developer';

// Imagina que tienes que crear 20 personas, ¿cuántas variables necesitas?

// Objetos al rescate
let myFirstObject = {};

// Cómo se imprime en pantalla

// Objetos con propiedades
let person = {
  firstName: 'Bienvenido',
  lastName: 'Sáez',
  age: 39,
  occupation: 'Developer',
}

// Explicar qué es un par llave-valor => Qué es la llave y qué es el valor. A la llave en Javascript se le llaman propiedades o atributos
// Explicar que son dos puntos y no = a la hora de darle valor a las propiedades
// La última coma es opcional, te la recomiendo

// ¿Cómo muestra nuestro objeto en la consola?
// No hay orden de propiedades tal y como lo hemos escrito

// Operador .
// Cómo accedo a las propiedades de un objeto
// Cómo modifico el valor de las propiedades de un objeto

// Acceder con [''] (String) de las dos formas
// ¿Cual es mejor? Si conoces el nombre de la propiedad . si lo que vas a hacer es iterar sobre el nombre de las propiedades, usa []. Hacer ejemplo con llave en un string para acceder

// ¿Cómo eliminar una propiedad? => delete => delete person.occupation
