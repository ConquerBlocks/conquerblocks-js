console.log('Ejercicio Calculadora');

class Calculadora {
  #resultado;

  constructor() {
    this.#resultado = 0;
  }

  obtenerResultado() {
    return this.#resultado;
  }

  reiniciar() {
    this.#resultado = 0;
  }

  sumar(numero) {
    try {
      if (isNaN(numero)) {
        throw Error('No se ha introducido un número válido')
      } else {
        this.#resultado = this.#resultado + numero
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  restar(numero) {
    this.#resultado = this.#resultado - numero;
  }

  multiplicar(numero) {
    this.#resultado = this.#resultado * numero;
  }

  dividir(numero) {
    try {
      if (numero === 0 || isNaN(numero)) {
        throw Error('Se ha introducido un 0 o no se ha introducido un número válido')
      } else {
        this.#resultado = this.#resultado / numero;
      }
    } catch (error) {
      console.error(error.message);
    }
  }

}


// let calc = new Calculadora();
// console.log(calc.obtenerResultado());
// calc.sumar(5);
// console.log(calc.obtenerResultado());
// calc.dividir(2);
// console.log(calc.obtenerResultado());

// console.log(calc.obtenerResultado());
// calc.restar(2);
// console.log(calc.obtenerResultado());
// calc.multiplicar(5);
// console.log(calc.obtenerResultado());
// calc.dividir(2);
// console.log(calc.obtenerResultado());
// calc.sumar('hola');
// console.log(calc.obtenerResultado());
