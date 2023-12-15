// Ejemplo de función saludar sin return
function saludar() {
  console.log('Hola buenos días');
}

saludar();

function multiplicar(){
  console.log(4 * 5);
}


// Ejemplo de función saludar con return
function saludar() {
  let saludo = 'Hola buenos días';
  return saludo;
}

let s = saludar();
console.log(s);



// Ejemplo de función saludar con parámetros
function saludar(nombre, apellidos) {
  let saludo = 'Hola buenos días ' + nombre + ' ' + apellidos ;
  return saludo;
}

let saludo = saludar('Felipe', 'Rodríguez');
console.log(saludo);



// Ejemplo de función con parámetros por defecto de ES5
function saludarES5(nombre, apellido) {
    nombre = nombre || 'Desconocido';
    apellido = apellido || 'Sin apellido';
    console.log('Hola ' + nombre + ' ' + apellido);
}


// Ejemplo de función con parámetros por defecto
function saludarES5() {
  console.log('Hola ' + arguments[0] + ' ' + arguments[1]);
}

saludarES5('Bienve', 'Sáez');





// Ejemplo de función dentro de función
// function funcionExterna() {
//   var variableExterna = "Hola, soy una variable de la función externa";

//   function funcionInterna() {
//       var variableInterna = " y yo soy una variable de la función interna.";
//       console.log(variableExterna + variableInterna); // Accede a ambas variables
//   }

//   return funcionInterna; // Llamamos a la función interna dentro de la función externa
// }

// funcionExterna()(); // Llamamos a la función externa


// Ejemplo de Clousure con un contador sin usar clases
// function crearContador() {
//   let contador = 0; // Variable que mantiene el estado del contador

//   return {
//       incrementar: function() {
//           contador++;
//           console.log(contador);
//       },
//       decrementar: function() {
//           contador--;
//           console.log(contador);
//       },
//       obtenerValor: function() {
//           return contador;
//       }
//   };
// }

// const miContador = crearContador(); // Creamos el contador

// // Uso del contador
// miContador.incrementar(); // Contador es 1
// miContador.incrementar(); // Contador es 2
// miContador.decrementar(); // Contador es 1
// console.log(miContador.obtenerValor()); // Imprime 1
