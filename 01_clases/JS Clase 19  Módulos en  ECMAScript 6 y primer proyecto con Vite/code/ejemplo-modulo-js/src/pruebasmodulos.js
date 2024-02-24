const MICONSTANTE = 5;

let pruebavariable = 'Hola esto es una prueba';

let pruebafuncion = () => {
  console.log('Desde pruebafunción');
}

let paraExportar = {
  miFuncion: pruebafuncion,
  miConstante: MICONSTANTE
}

export default paraExportar;
