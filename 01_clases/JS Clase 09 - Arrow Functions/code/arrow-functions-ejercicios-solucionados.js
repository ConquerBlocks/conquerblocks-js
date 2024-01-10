// Para cada una de las funciones que tenemos aquí, pásalas a Arrow Functions

// Función 1
const sumar = (a, b) => a + b;

// Función 2
const cuadrado = numero => numero * numero;

// Función 3
const obtenerUsuario = id => ({ id: id, nombre: "Usuario" + id });

// Función 4
const procesarLista = lista => {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
};

//Función 5
(() => console.log("Ejecutando una IIFE"))();

// Función 6
const objeto = {
  id: 10,
  obtenerId: () => this.id
};

// Función 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function() {
    setTimeout(() => console.log(this.mensaje), 1000);
  }
};
