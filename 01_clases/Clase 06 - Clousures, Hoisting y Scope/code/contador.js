function crearContador(contador = 0) {

  function incrementar() {
    contador++;
  }

  function decrementar() {
    contador--;
  }

  function valor() {
    return contador;
  }

  return {
    incrementar: incrementar,
    decrementar: decrementar,
    valor: valor
  }
}

const c1 = crearContador(5);
const c2 = crearContador(100);
c1.incrementar();
c1.incrementar();
c2.decrementar();
console.log(c1.valor());
console.log(c2.valor());
