const persona = {
  profesion: 'Sin profesión',
  saludar: function (nombre) {
    console.log(`Hola ${nombre}, qué tal está`);
  }
}

const alumno = {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack',
    profesion: 'Estudiante'
}

// Comprobación de prototipo de un objeto o variable

// Asignación de prototipo primera forma NO RECOMENDABLE
alumno.__proto__ = Persona;

// Asignación de prototipo segunda forma NO RECOMENDABLE
Object.setPrototypeOf(sacha, persona);

// Probamos a acceder a salurdar desde alumno
alumno.saludar('Jose');

// Prototipos dinámicos
// persona.despedirse = function () {
//   console.log('Adiós');
// }

// alumno.despedirse();

// Propiedades en el objeto y en su prototipo


// Cadena de prototipos
// Escribimos un objeto literal, array, funciones todo eso usa un prototipo
// Comparar el método toString de alumno y persona
// Protipo que comparten todos los objetos en Javascript
Object.prototype..... // Tiene todos los métodos del prototipo de todos los objetos

// Cómo saber si un objeto es el prototipo de otro
alumno.__proto__ === persona // No usar en nuestros programas
persona.isPrototypeOf(alumno); // Pregunta si ese prototipo está en la cadena de prototipos
// Es object prototipo de cualquier prototipo?


// toString
