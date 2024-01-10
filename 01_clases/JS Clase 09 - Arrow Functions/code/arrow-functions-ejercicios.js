// Para cada una de las funciones que tenemos aquí, pásalas a Arrow Functions

// Función 1
function sumar(a, b) {
  return a + b;
}

// Función 2
function cuadrado(numero) {
  return numero * numero;
}

// Función 3
function obtenerUsuario(id) {
  return { id: id, nombre: "Usuario" + id };
}

// Función 4
function procesarLista(lista) {
  let resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
}

//Función 5
(function() {
  console.log("Ejecutando una IIFE");
})();


// Función 6
const objeto = {
  id: 10,
  obtenerId: function() {
    return this.id;
  }
};


// Función 7
const temporizador = {
  mensaje: "Listo!",
  iniciar: function() {
    setTimeout(function() {
      console.log(this.mensaje);
    }, 1000);
  }
};
