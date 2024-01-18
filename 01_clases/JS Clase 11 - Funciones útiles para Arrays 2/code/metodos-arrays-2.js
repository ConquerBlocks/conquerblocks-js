const alumnos = [
  {
    id: 0,
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

const nombres = ['Jose Luís', 'Lucía', 'Felipe', 'Lucía'];



// Ordenar array de primitos con sort
alumnos.sort((a, b) => {
  /**
   * Debe devolver un número negativo si a va antes que b
   * Debe devolver un número positivo si b va antes que a
   * Debe devolver 0 si a y b son iguales
   */
  // return a.edad - b.edad;

  if (a.edad < b.edad) {
    return -1;
  } else if (a.edad > b.edad) {
    return 1;
  } else {
    return 0;
  }
});


// Buscar primitivos dentro de un array con indexOf
// Dame un array de nombres de personas
console.log(nombres.indexOf('Lucía')); // 1
console.log(nombres.indexOf('María')); // -1
console.log(nombres.lastIndexOf('Juan')); // -1
console.log(nombres.lastIndexOf('Lucía')); // 3

//Empezar la búsqueda en un índice concreto
console.log(nombres.indexOf('Lucía', 2)); // 3

// Cómo hacemos para saber si un elemento está en un array: indexOf !== -1
// Introducción a includes


// Buscar valores por referencia en un array con indexOf, son referencias a objetos diferentes



// let alumno = usuarios.indexOf(
//   {
//     id: 1,
//     nombre: 'Jose Luís'
//   }
// ); // -1

let alumno = {
    id: 1,
    nombre: 'Jose Luís'
  }
); // -1


let alumnoEncontrado = alumnos.find(function(alumno) {
  return alumno.id === 2;
}); // devuelve el primer elemento que cumple la condición


let indiceAlumnoEncontrado = alumnos.findIndex(function(alumno) {
  return alumno.id === 2;
}); // devuelve el primer elemento que cumple la condición

// Buscar valores por referencia en un array con find (devuelve el primer elemento que cumple la condición)
// Buscar valores por referencia en un array con findIndex (devuelve el primer elemento que cumple la condición)

// Spread operator ES06
// En lugar de usar concat
// let arr1 = ['a', 'b', 'c']
// let arr2 = ['g', 'h', 'i']
// let mezcla = [...arr1, ...arr2]

// Copias de arrays para no modificar originales
// let arr4 = [...arr2];
// arr2.pop();
// console.log(arr4)
