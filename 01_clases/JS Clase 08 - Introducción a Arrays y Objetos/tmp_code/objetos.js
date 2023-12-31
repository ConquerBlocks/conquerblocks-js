const miPrimerObjeto = {};
console.log(miPrimerObjeto);

let firstName = 'Bienvenido';
let lastName = 'Sáez'
let age = 39;
let occupation = 'Developer';

const person = {
  firstName: 'Bienvenido',
  lastName: 'Sáez',
  age: 39,
  occupation: 'Developer',
  city: 'Motril',
}

for (const atributo in person) {
  console.log(`${atributo}: ${person[atributo]}`);
}
