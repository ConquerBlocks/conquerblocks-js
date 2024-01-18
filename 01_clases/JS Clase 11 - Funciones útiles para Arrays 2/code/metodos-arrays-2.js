const edades = [4, 7, 8, 9, 5, 3];

const alumnos = [
  {
    id: 99,
    nombre: 'Zamora',
    edad: 35
  },
  {
    id: 1,
    nombre: 'Jose Luís',
    edad: 22
  },
  {
    id: 2,
    nombre: 'Lucía',
    edad: 19
  },
  {
    id: 3,
    nombre: 'Felipe',
    edad: 49
  }
];

  /**
   * Debe devolver un número negativo si a va antes que b
   * Debe devolver un número positivo si b va antes que a
   * Debe devolver 0 si a y b son iguales
   */
  // return a.edad - b.edad;
// alumnos.sort((a1, a2) => {
//   if (a1.edad > a2.edad) {
//     return -1;
//   } else if (a1.edad < a2.edad) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// console.log(alumnos);

// const vecinos = ['María', 'Jose', 'Luís', 'María', 'Antonio'];

// console.log(vecinos.indexOf('María'));
// console.log(vecinos.lastIndexOf('María'));
// console.log(vecinos.indexOf('María', 1));
// console.log(vecinos.includes('Antonio'));


// Búsqueda de elementos por referencia
// console.log(alumnos.find((alumno) => {
//   return alumno.nombre === 'Lucía';
// }));


// console.log(alumnos.findIndex((alumno) => {
//   return alumno.nombre === 'Lucía';
// }));
// const hombres = ['Juan', 'Felipe', 'Antonio'];
// const mujeres = ['María', 'Lucía'];

// const todos = [...hombres, 'Nicasio', ...mujeres];
// const hombres2 = [...hombres];
// hombres2[0] = 5;


// const nombres = ['Felipe', 'María', 'felipe', 'maria'];
// nombres.sort((a, b) => {
//   if (a.toUpperCase() < b.toUpperCase()) {
//     return 1;
//   } else if (a.toUpperCase() > b.toUpperCase()){
//     return -1;
//   }else {
//     return 0;
//   }
// })
