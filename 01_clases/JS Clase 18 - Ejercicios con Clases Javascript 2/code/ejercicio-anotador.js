console.log('Ejercicio Anotador');

class Anotador {
  #titulo;
  #notas;

  constructor(titulo) {
    this.#notas = [];
    this.#titulo = titulo;
  }

  // agregarNota(nota) agrega nota al array de notas
  agregarNota(nota) {
    this.#notas.push(nota);
  }

  // actualizarNota(id, nota) actualiza el ítem con índice id, reemplazándolo por nota
  actualizarNota(id, nota) {
    this.#notas[id] = nota;
  }

  // obtenerNota(id) devuelve el ítem del array notas con índice id
  obtenerNota(id) {
    return this.#notas[id];
  }

  // eliminarNota(id) elimina de notas el ítem con índice id
  eliminarNota(id) {
    this.#notas.splice(id, 1);
  }

  // eliminarNotas() borra todos los ítems de notas
  eliminarNotas() {
    this.#notas = [];
  }

  // listarNotas() devuelve un string con todas las notas y sus respectivos ids, por ejemplo
  listarNotas() {
    return this.#notas.reduce(
      (salida, nota, index) => {
        return `${salida} \n ${index+1}. ${nota}`
      }
      , `${this.#titulo} \n----------------\n`);
  }
}

let lista = new Anotador('Lista de la compra');
lista.agregarNota('Leche');
lista.agregarNota('Pan');
lista.agregarNota('Refrescos');
lista.agregarNota('Lentejas');
console.log(lista.listarNotas());

lista.actualizarNota(0, 'Leche desnatada');
console.log(lista.listarNotas());
console.log(lista.obtenerNota(1));
lista.eliminarNota(1);
console.log(lista.listarNotas());
lista.eliminarNotas();
console.log(lista.listarNotas());
