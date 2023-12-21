var fruta = 'manzana';

function comer() {
  var fruta = 'banana';

  function lavar() {
    console.log(`Lavando ${window.fruta}`)
  }

  lavar();
  console.log(`Comiendo ${fruta}`)
}

comer();
