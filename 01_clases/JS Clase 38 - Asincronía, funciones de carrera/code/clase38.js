console.log("Empezamos la clase 38");

// Definamos nuestras promesas
// const promise1 = Promise.reject(55);
// const promise2 = 33;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Se ha ejecutado la promesa 3");
// });

// // Promesas en serie
// promise1
//   .then((valor) => {
//     console.log("valor", valor);
//     return promise2;
//   })
//   .then((valor2) => {
//     console.log("valor2", valor2);
//     return promise3;
//   })
//   .then((valor3) => {
//     console.log("valor3", valor3);
//   })
//   .catch((error) => {
//     console.error("Error", error);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

// Promesas en paralero
// .all: se resuelve cuando todas las promesas que le pasamos se resuelven
// Declaramos 3 promesas, una que resuelva instantánea, otra que devuelva un número y otra que resuelve en 1 segundo
// Promise.all([promise1, promise2, promise3])
//   .then((valoresRetornados) => console.log(valoresRetornados))
//   .catch((error) => console.error("Alguna promesa ha sido rechazada", error));

// Método de carrera o Race de las promesas que se resuelve cuando la primera promesa de las que le pasamos se resuelve
// Promise.race([promise1, promise2, promise3])
//   .then((valores) => console.log("all", valores))
//   .catch((error) => console.error("Error", error));

// Método any de las promesas que se resuelve cuando alguna de las promesas de las que le pasamos se resuelve. Si alguna es rechazada la ignora y sigue con las demás
// Promise.any([promise1, promise2, promise3])
//   .then((valor) => console.log("Any", valor))
//   .catch((error) => console.error("Error", error));

// Método allSettled de las promesas que se resuelve cuando todas las promesas de las que le pasamos se resuelven o rechazan. No ejecuta catch
// Promise.allSettled([promise1, promise2, promise3]).then((valores) =>
//   console.log("allSettled", valores)
// );

// Imaginemos una promesa que busca en uns servidor el primer usuario que contenga la cadena 'Bienve' en su nombre

// const buscarUsuario = (nombre) =>
//   new Promise((resolve, reject) => {
//     // Aquí buscar un usuario por nombre y devuelve el primero que encuentre
//     // buscarEnServidorUsuario(nombre);
//     console.log("Buscando un usuario con el nombre:", nombre);
//     let user = {
//       name: "Bienve Jose",
//       dni: 12345678,
//       edad: 19,
//     };
//     resolve(user);
//   });

// const buscarActividad = (user, fechaActual) =>
//   new Promise((resolve, reject) => {
//     // Función que dado un usuario y una fecha, devuelve la actividad que ha hecho ese usuario en esa fecha
//     // buscarEnServidorActividad(user, fechaActual);
//     const actions = {
//       user: user,
//       activities: [
//         {
//           date: fechaActual,
//           text: "entrar",
//         },
//         {
//           date: fechaActual,
//           text: "nadar",
//         },
//         {
//           date: fechaActual,
//           text: "caminar",
//         },
//       ],
//     };
//     resolve(actions);
//   });

// buscarUsuario("Bienve")
//   .then((user) => {
//     console.log("El usuario que se ha encontrado es:", user);
//     return buscarActividad(user, new Date());
//   })
//   .then((activities) => console.log(activities));
