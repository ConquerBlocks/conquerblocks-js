// Definición de clases

// Primera versión, con una función constructora
function Usuario(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

// Explicar que saludar está en todas las instancias que creemos por lo que se desaprovecha mucho espacio

// Ahora añadamos una función al prototipo

Usuario.prototype.despedirse = function () {
  console.log(`Soy ${this.nombre} ${this.apellido}, me despido`);
}

// Comprobemos donde vive ahora la función despedirse


// Nuestra primera clase
// Explicar lo que es el constructor

class Usuario {
  // Explicar que el constructor es un método especial que se ejecuta cuando se crea un nuevo objeto de la clase
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

// Añadámosle el método saludar en primera instancia

class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    this.saludar = function () {
      console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }
  }
}

// Tenemos el mismo problema que con las funciones constructoras, metamos saludar en la clase
class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

// ¿Cómo hacíamos atributos privados en funciones constructoras?

function Usuario(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  let password = 'passwordsuperseguro';

  this.getPassword = function () {
    return password;
  }
}

let u1 = new Usuario('Bienve', 'Sáez');
u1.getPassword();


// Cómo lo hacemos con clases?

class Usuario {
  #password;

  constructor(nombre, apellido, password) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.#password = password;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }

  getPassword() {
    return this.#password;
  }
}

//Comentar que el acceso solo funciona en chrome para debugger
let u1 = new Usuario('Bienve', 'Sáez', 'passwordsuperseguro');
u1.getPassword();
console.log(u1.#password);

// Métodos estáticos, ejemplo Math.abs o Math.random
// Por ejemplo las funciones de los array, son métodos estáticos de la clase Array
const alumnos = [];
Array.isArray(alumnos);

// Son métodos que pertenecen a la clase y no a la instancia
class Alumno {
  constructor(id, nombre, apellido, email) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }

  static obtenerAlumnos(id) {
    console.log('Buscando en la API el alumno con id ' + id);
    console.log(`He obtenido el alumno ${id}`);
    // Es normal que devuelvan algo, en este caso el alumno que ha encontrado
    return new Alumno(id, 'Pepe', 'Pérez', 'pepeperez@gmail.com');
  }
}

// También podemos tener propiedades estáticas. Por ejemplo PI




// Getters y setters

// Explicar la importancia de los mismos
class Alumno {
  #edad;

  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    if (nuevaEdad < 0 || nuevaEdad > 120) {
      console.error('No se puede tener una edad negativa ni mayor de 120');
      throw new Error('Edad incorrecta');
      return;
    }
    this.#edad = nuevaEdad;
  }
}



// Herencia
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}


class Alumno extends Persona {
  #curso;

  // importantísimo llamar al constructor padre
  constructor(nombre, apellido, curso) {
    super(nombre, apellido);
    this.#curso = curso;
  }

  // Cómo sobreescribir un método, se va a ejecutar el método más cercano a la clase
  // Podemos ejecutar también el del padre con super.saludar()
  // saludar() {
  //   console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy estudiante`);
  // }

  // Comprobar donde vive el método estudiar
  estudiar() {
    console.log('Estudiando');
  }
}
