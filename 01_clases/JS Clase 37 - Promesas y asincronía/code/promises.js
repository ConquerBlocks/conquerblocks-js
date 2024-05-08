// console.log("Empezando la clase de promesas");

// Cómo declaramos una promesa
// let p1 = new Promise((resolve, reject) => {
//   resolve(5);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("La promesa se ha resuelto de forma correcta");
//   }, 5000);
// });

// let p3 = new Promise((resolve, reject) => {
//   resolve(27);
// });

// let p3 = new Promise((resolve, reject) => {
//   reject("La promesa NO se ha resuelto de forma correcta");
// });

// Veamos qué métodos tienen las promesas para poder capturar sus estados
// then: se ejecuta cuando la promesa se resuelve
// catch: se ejecuta cuando la promesa es rechazada
// finally: se ejecuta siempre, tanto si la promesa se resuelve como si es rechazada

// p2.then(
//   (valordevuelvo) => {
//     console.log("OK: ", valordevuelvo);
//   },
//   (valorsierror) => console.log("Error: ", valorsierror)
// );

// p1.then((valor) => {
//   console.log("P1 me ha devuelto: ", valor);
//   return p2;
// })
//   .then((valor2) => {
//     console.log("Segundo then: ", valor2);
//     return p3;
//   })
//   .then((valor3) => {
//     console.log("Tercer valor: ", valor3);
//     return valor3;
//   })
//   .catch((error) => {
//     console.log("Ha ocurrido un error", error);
//   })
//   .finally(() => {
//     console.log("Ejecutando finally");
//   });

// Métodos estáticos
// ¿Qué pasa cuando queremos rechazar una promesa manualmente?

// let pp1 = new Promise((resolve, reject) => {
//   resolve(18);
// });

// let pp2 = new Promise((resolve, reject) => {
//   console.log("Generando clave");
//   setTimeout(() => {
//     resolve("aklhdgsi4");
//   }, 5000);
// });

// pp1
//   .then((edad) => {
//     if (edad >= 18) {
//       console.log("Acceso autorizado");
//       return pp2;
//     } else {
//       return Promise.reject("Edad menor que 18");
//     }
//   })
//   .then((clave) => {
//     console.log("Tu clave es: ", clave);
//   })
//   .catch((e) => {
//     console.log("Ha ocurrido un error: ", e);
//   })
//   .finally(() => {
//     console.log("Cerrando la conexión");
//   });
