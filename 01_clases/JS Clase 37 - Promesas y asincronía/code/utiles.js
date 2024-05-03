// Dos argumentos: resolve y reject
// resolve: se ejecuta cuando la promesa se resuelve
// reject: se ejecuta cuando la promesa es rechazada

// Nuestra primera promesa de respuesta instantánea
let promesa = new Promise((resolve, reject) => {
  resolve("Promesa resuelta");
});

// En este caso, la promesa se resuelve después de 2 segundos, veámoslo en la consola y comprobemos su estado antes de terminar y después de terminar
promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa resuelta");
  }, 3000);
});

// Hagamos nuestra primera promesa rechazada sin manejar errores ni estar en una cadena de promesas
promesa = new Promise((resolve, reject) => {
  reject(50);
});


promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(50);
  }, 3000);
});


// Veamos qué métodos tienen las promesas para poder capturar sus estados
// then: se ejecuta cuando la promesa se resuelve
// catch: se ejecuta cuando la promesa es rechazada
// finally: se ejecuta siempre, tanto si la promesa se resuelve como si es rechazada

// Ejemplo de then, con dos funciones, una para el caso de éxito y otra para el caso de error
// La probamos con cada uno de ellos
promesa.then(
  valor => console.log(valor),
  error => console.error(error)
)



// Las promesas pueden ir encadenadas, es decir, podemos tener una promesa que se resuelva y después de que se resuelva, se ejecute otra promesa
// Then devuelve otra promesa, por lo que podemos encadenarlas

let p1 = new Promise((resolve, reject) => {
  resolve(10);
});

let p2 = new Promise((resolve, reject) => {
  resolve(20);
});

// para poder usar en las siguientes promesas algo que se ha calculado en una promesa anterior, podemos encadenarlas, pero tenemos que acordarnos de devolver algo en cada then para poder seguir encadenando

// Este sería un ejemplo en el que encadenamos dos promesas y en la segunda inyectamos el valor calculado de la primera
p1.then(valor => {
  return valor + 1;
}).then(valor2 => {
  console.log('valor2', valor2);
});

// Este sería un ejemplo en el que encadenamos dos promesas y en la segunda devolvemos el valor que retorna p2
p1.then(valor => {
  return p2;
}).then(valor2 => {
  console.log('valor2', valor2);
});


// Ahora tenemos dos promesas encadenadas, pero qué pasa si alguna de ellas falla?
// Podemos capturar el error en el catch de la cadena de promesas

// Vamos a promar hacer un reject en p2. Podemos darle uns segunda función a p2, pero hay una manera mejor

// Catch al rescate, se pone al final de la cadena de promesas y sirve para todas las de la cadena
// Probemos a rechazar p2 y p1

p1.then(valor => {
  return p2;
}).then(valor2 => {
  console.log('valor2', valor2);
}).catch(error => {
  console.error('Error', error);
});


// También existe Finally, que se ejecuta siempre, tanto si la promesa se resuelve como si es rechazada
// Probemos a añadir finally a nuestra cadena de promesas. NO RECIBE NUNCA UN ARGUMENTO

p1.then(valor => {
  return p2;
}).then(valor2 => {
  console.log('valor2', valor2);
}).catch(error => {
  console.error('Error', error);
}).finally(() => {
  console.log('Finally');
});


// Métodos estáticos
// ¿Qué pasa cuando queremos rechazar una promesa manualmente?

// Promise.reject() y Promise.resolve() son métodos estáticos que nos permiten crear promesas rechazadas o resueltas manualmente


// Métodos all y race

// Las cadenas van una detrás de otra, en serie
// ¿Cómo podemos hacer que se ejecuten en paralelo?

// Promise
// .all: se resuelve cuando todas las promesas que le pasamos se resuelven
// Declaramos 3 promesas, una que resuelva instantánea, otra que devuelva un número y otra que resuelve en 1 segundo

const p1 = Promise.resolve(5);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});

Promise.all([p1, p2, p3])
  .then(valores => console.log('all', valores))
  .catch(error => console.error('Error', error));

// Probemos a la hora de rechazar alguna de las tres, algunas con timeout y otras sin él

// Método race de las promesas que se resuelve cuando la primera promesa de las que le pasamos se resuelve

Promise.race([p1, p2, p3])
  .then(valores => console.log('all', valores))
  .catch(error => console.error('Error', error));

// Método any de las promesas que se resuelve cuando alguna de las promesas de las que le pasamos se resuelve. Si alguna es rechazada la ignora y sigue con las demás

Promise.any([p1, p2, p3])
  .then(valor => console.log('Any', valor))
  .catch(error => console.error('Error', error));


// Método allSettled de las promesas que se resuelve cuando todas las promesas de las que le pasamos se resuelven o rechazan. No ejecuta catch
Promise.allSettled([p1, p2, p3])
  .then(valores => console.log('allSettled', valores))
  .catch(error => console.error('Error', error));
