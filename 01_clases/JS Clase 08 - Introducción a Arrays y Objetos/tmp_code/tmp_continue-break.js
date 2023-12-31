// Hacer un programa que imprima únicamente los valores impares entre 1 y 100

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}


// Hacer un programa que imprima los primeros 10 números pares

let contador = 0;
let encontrados = 0;

while (true) {
  contador++;
  if(contador%2 === 0){
    encontrados++;
    console.log(contador);
  }
  if (encontrados === 10) {
    break;
  }
}
console.log('Fin del programa');
