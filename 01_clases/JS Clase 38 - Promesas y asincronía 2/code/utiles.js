// const promise1 = Promise.resolve(55);
// const promise2 = 33;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'foo');
// });

// // Promesas en serie
// promise1.then(valor => {
//   return promise2;
// }).then(valor2 => {
//   console.log('valor2', valor2);
//   return promise3;
// }).then(valor3 => {
//   console.log('valor3', valor3);
// }).catch(error => {
//   console.error('Error', error);
// }).finally(() => {
//   console.log('Finally');
// });


// Promesas en paralero
// .all: se resuelve cuando todas las promesas que le pasamos se resuelven
// Declaramos 3 promesas, una que resuelva instantánea, otra que devuelva un número y otra que resuelve en 1 segundo
// Promise.all([promise1, promise2, promise3])
//   .then(valores => console.log('Todas se han resuelto', valores))
//   .catch(error => console.error('Alguna promesa ha sido rechazada', error));

// Probemos ahora:
// - Rechazar alguna de las tres
// - Ponerle algún timeout a alguna
// - Resolverlas todas
// - Comprobar que valores toma justamente los valores en orden de declaración

// Método de carrera o Race de las promesas que se resuelve cuando la primera promesa de las que le pasamos se resuelve
// Promise.race([promise1, promise2, promise3])
//   .then(valores => console.log('all', valores))
//   .catch(error => console.error('Error', error));

// Probemos ahora:
// - Rechazar alguna de las tres
// - Ponerle algún timeout a alguna
// - Resolverlas todas
// - Comprobar que valores toma justamente los valores en orden de declaración


// Método any de las promesas que se resuelve cuando alguna de las promesas de las que le pasamos se resuelve. Si alguna es rechazada la ignora y sigue con las demás

// Promise.any([promise1, promise2, promise3])
//   .then(valor => console.log('Any', valor))
//   .catch(error => console.error('Error', error));

// Probemos ahora:
// - Rechazar alguna de las tres
// - Ponerle algún timeout a alguna
// - Resolverlas todas
// - Rechazarlas todas
// - Comprobar que valores toma justamente los valores en orden de declaración


// Método allSettled de las promesas que se resuelve cuando todas las promesas de las que le pasamos se resuelven o rechazan. No ejecuta catch
// Promise.allSettled([promise1, promise2, promise3])
//   .then(valores => console.log('allSettled', valores))
//   .catch(error => console.error('Error', error));

// Probemos ahora:
// - Rechazar alguna de las tres
// - Ponerle algún timeout a alguna
// - Resolverlas todas
// - Comprueba que status nos devuelve si ha sido resuelta o no
// - Comprobar que valores toma justamente los valores en orden de declaración



// ARGUMENTOS
// Cómo podemos utilizar un parámetro de una función en una promesa y devolverlo en el then después de hacerle cálculos
// Debemos tener esas variables antes del contexto de la promesa, cosa que no es fácil
// Para ello podemos convertir la promesa en una Arrow Function y pasarle los argumentos que necesitamos

// let nombre = 'Bienve';
// let fechaActual = new Date();

// Imaginemos una promesa que busca en uns servidor el primer usuario que contenga la cadena 'Bienve' en su nombre
// const buscarUsuario = new Promise((resolve, reject) => {
//   // Aquí buscar un usuario por nombre y devuelve el primero que encuentre
//   // buscarEnServidorUsuario(nombre);
//   let user = {
//     name: 'Pepe',
//     dni: 12345678,
//     edad: 19
//   };
//   resolve(user);
// });

// const buscarActividad = new Promise((resolve, reject) => {
//   // Función que dado un usuario y una fecha, devuelve la actividad que ha hecho ese usuario en esa fecha
//   // buscarEnServidorActividad(user, fechaActual);
//   const actions = {
//     user: user,
//     activities: [
//       {
//         date: fechaActual,
//         text: 'entrar'
//       },
//       {
//         date: fechaActual,
//         text: 'nadar'
//       },
//       {
//         date: fechaActual,
//         text: 'caminar'
//       }
//     ]
//   }
//   resolve(actions);
// });

// pp1.then(user => {
//   console.log('user', user);
//   return pp2;
// }
// ).then(activities => {
//   console.log('Actividades', activities);
// });



// // Podemos hacerlo de la siguiente manera
// const buscarUsuario = (name) =>new Promise((resolve, reject) => {
//   // Aquí buscar un usuario por nombre y devuelve el primero que encuentre
//   // buscarEnServidorUsuario(name);
//   console.log('Buscando usuario con el nombre: ', name);
//   let user = {
//     name: 'Pepe',
//     dni: 12345678,
//     edad: 19
//   };
//   resolve(user);
// });

// const buscarActividad = (user, dateToSearch) => new Promise((resolve, reject) => {
//   // Función que dado un usuario y una fecha, devuelve la actividad que ha hecho ese usuario en esa fecha
//   // buscarEnServidorActividad(user, fechaActual);
//   console.log('Buscando actividades del usuario:', user.name, 'en la fecha:', dateToSearch);
//   const actions = {
//     user: user,
//     activities: [
//       {
//         date: dateToSearch,
//         text: 'entrar'
//       },
//       {
//         date: dateToSearch,
//         text: 'nadar'
//       },
//       {
//         date: dateToSearch,
//         text: 'caminar'
//       }
//     ]
//   }
//   resolve(actions);
// });



buscarUsuario('Bienve').then(user => {
  console.log('user', user);
  return buscarActividad(user, new Date());
}
).then(activities => {
  console.log('Actividades', activities);
});
