

class Auto {
  #encendido;
  #velocidad;
  #marca;
  #modelo;
  #patente;

  constructor(marca, modelo, patente) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#patente = patente;
    this.#velocidad = 0;
    this.#encendido = false;
  }

  arrancar() {
    this.#encendido = true;
  }

  apagar() {
    if (this.#velocidad === 0) {
      this.#encendido = false;
    } else {
      console.info('El vehículo va una velocidad mayor a 0');
    }
  }

  acelerar() {
    if (this.#encendido) {
      this.#velocidad = this.#velocidad + 10;
    } else {
      console.info('El coche no está encendido');
    }
  }

  desacelerar() {
    if (this.#encendido) {
      if (this.#velocidad > 0) {
        this.#velocidad = this.#velocidad - 10;
        if (this.#velocidad < 0) {
          this.#velocidad = 0;
        }
      } else {
        console.info('El coche no puede desacelerar porque no está andando');
      }
    } else {
      console.info('El coche no está encendido');
    }
  }

  toString() {
    return `${this.#marca} ${this.#modelo}, patente ${this.#patente}`;
  }
}


// let coche = new Auto('Audi', 'Q3', 'ZZ');
// console.log(coche.toString());

// coche.arrancar()
// coche.acelerar();
// coche.apagar();
// coche.desacelerar();
// console.log(coche);
// coche.desacelerar();
// console.log(coche);
