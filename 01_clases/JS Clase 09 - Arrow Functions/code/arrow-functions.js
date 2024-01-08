function saludo() {
  return 'Hola qué tal estás';
}

function saludo2(nombre) {
  return `Hola qué tal estás ${nombre}`;
}

function saludo3(nombre, apellido) {
  return `Hola qué tal estás ${nombre} ${apellido}`;
}

// Diferencias
// - No tiene la palabra function
// - No tiene acceso a this (ya hablaremos más adelante sobre this)
// - No tiene el objeto arguments como en las funciones tradicionales
// - Siempre son anónimas
// - No son afectadas por el Hoisting, es decir, no pueden llamarse antes de declararse

// Definición de nuestra primera Arrow Function

// Return implícito (sin llaves)

// Parámetros

// Único parámetro, omitiendo paréntesis
