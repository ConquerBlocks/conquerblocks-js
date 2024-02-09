// Definición de clases

// Primera versión, con una función constructora

// La principal diferencia es que los métodos de Usuario no van a estar en el prototipo, sino que se van a crear cada vez que se cree un nuevo objeto Usuario. Esto puede ser un problema si tenemos muchos objetos Usuario, ya que estaríamos creando muchas veces los mismos métodos.
function Usuario(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  }
}

Usuario.prototype.despedirse = function () {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}, me despido`);
}

// Comprobar en la consola dónde vive el método saludar

// Clase para manejar los datos de un usuario

// Segunda versión, con una clase. La sintaxis es más clara y más parecida a otros lenguajes de programación. Además, los métodos de Usuario van a estar en el prototipo, por lo que no se van a crear cada vez que se cree un nuevo objeto Usuario.
class Usuario {
    // Explicar que el constructor es un método especial que se ejecuta cuando se crea un nuevo objeto de la clase
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.despedirse = function () {
          console.log(`Hola, soy ${this.nombre} ${this.apellido}, me despido`);
        }
    }

    activo = true;

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }

    // Función de la instancia y no de la clase
    // cerraSesion = () => {
    //   this.activo = false;
    //   console.log('Sesión cerrada');
    // }
}


// Comprobar en la consola dónde vive el método saludar
// Comprobar la diferencia entre despedirse y saludar
// Class es únicamente azúcar sintáctico pero es muy útil
// Comprobar la función cerrarSesión como arrow functions
// Recordar que con Class siempre hay que usar new
// Las funciones tienen hoisting, las clases no

// Miembros privados, primero en una función constructora y luego en una clase

// Primera versión, con una función constructora
function Usuario(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    let activo = true;

    this.saludar = function () {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }

    this.getActivo = function () {
        return activo;
    }
}

class Usuario {
    #activo = true;

    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
    }

    getActivo() {
        return this.#activo;
    }
}

// Mostrar lo curioso de que chrome nos muestre acceso a la propiedad, pero no podamos hacer nada con ella



// Métodos estáticos, ejemplo Math.abs o Math.random

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

    // static nAlumnos = 0;

    static obtenerAlumnos(id) {
      console.log('Buscando en la API el alumno con id ' + id);
      console.log(`He obtenido el alumno ${id}`);
      return new Alumno(id, 'Pepe', 'Pérez', 'pepeperez@gmail.com');
    }
}

// Por ejemplo las funciones de los array, son métodos estáticos de la clase Array
const alumnos = [];
Array.isArray(alumnos);

// También podemos tener propiedades estáticas.




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
  // importantísimo llamar al constructor padre
  constructor(nombre, apellido, email) {
    super(nombre, apellido);
    this.email = email;
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
