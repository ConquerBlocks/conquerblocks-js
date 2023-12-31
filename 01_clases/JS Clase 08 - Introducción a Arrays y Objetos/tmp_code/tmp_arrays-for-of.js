let nombresConValores = ['Jose', 'Luis', 'Ana', 'María'];

for (let i = 0; i < nombresConValores.length; i++){
  console.log(nombre);
}

for (let nombre of nombresConValores){
  console.log(nombre);
}

let contador = 0;
while(contador < nombresConValores.length){
  console.log(nombresConValores[contador]);
  contador++;
}
