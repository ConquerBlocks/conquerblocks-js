

class Television {
  #encendido = false;
  #canal = 100;
  #canales;
  #volumen = 0;
  #marca;

  constructor(marca, canales) {
    this.#marca = marca;
    this.#canales = canales;
  }

  prender() {
    this.#encendido = true;
  }

  apagar() {
    this.#encendido = false;
  }

  verCanalSiguiente() {
    if (this.#encendido) {
      if (this.#canal === 100) {
        this.#canal = 0;
      } else {
        this.#canal = this.#canal + 1;
      }
    } else {
      console.log('El televisor no está encendido');
    }
  }

  verCanalanterior() {
    if (this.#encendido) {
      if (this.#canal === 0) {
        this.#canal = 100;
      } else {
        this.#canal = this.#canal - 1;
      }
    } else {
      console.log('El televisor no está encendido');
    }
  }

  cambiarCanal(canal) {
    if (this.#encendido) {
      if (canal <= 100 && canal >= 0) {
        this.#canal = canal;
      } else {
        console.log('El canal no existe');
      }
    } else {
      console.log('El televisor no está encendido');
    }
  }

  subirVolumen() {
    if (this.#encendido) {
      if (this.#volumen === 100) {
        console.log('Ya está al máximo');
      } else {
        this.#volumen = this.#volumen + 1;
      }
    } else {
      console.log('El televisor no está encendido');
    }
  }

  bajarVolumen() {
    if (this.#encendido) {
      if (this.#volumen === 0) {
        console.log('Ya está al mínimo');
      } else {
        this.#volumen = this.#volumen - 1;
      }
    } else {
      console.log('El televisor no está encendido');
    }
  }

  toString() {
    return `Televisor ${this.#marca} \n - Canales: ${this.#canales} \n - Canal actual: ${this.#canal} \n - Volumen actual: ${this.#volumen}`;
  }
}


let tele = new Television('Samsung', 23);
console.log(tele.toString());
tele.prender();
tele.verCanalSiguiente();
tele.verCanalanterior();
tele.verCanalanterior();
tele.subirVolumen();
tele.cambiarCanal(90);
console.log(tele.toString());
