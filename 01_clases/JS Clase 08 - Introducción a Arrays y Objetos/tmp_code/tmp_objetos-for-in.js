// Objetos con propiedades
let person = {
  firstName: 'Bienvenido',
  lastName: 'Sáez',
  age: 39,
  occupation: 'Developer',
}

// Imprimir las llaves del objeto
for (let key in person){
  console.log(key);
}

// Imprimir los valores del objeto
for (let key in person){
  console.log(person[key]);
}

// Imprimir los valores del objeto
for (let key in person){
  console.log(key, person[key]);
}
