console.log('Ejercicio Wallet');


// los objetos gasto y ganancia contiene las propiedades:
// descripcion (string)
// cantidad (número)
// fecha (Date)
// categoria (string)
class Movimiento {
  descripcion;
  cantidad;
  fecha;
  categoria;

  constructor(desc, cantidad, fecha, tipo, categoria) {
    this.descripcion = desc;
    this.cantidad = cantidad;
    this.fecha = fecha;
    this.tipo = tipo;
    this.categoria = categoria;
  }
}

class Wallet {
  #monto;
  #operaciones;

  constructor(montoInicial=0) {
    this.#monto = montoInicial;
    this.#operaciones = [];
  }

  agregarMovimiento(movi) {
    this.#operaciones.push(movi);
    if (movi.tipo == 'GASTO') {
      this.#monto = this.#monto - movi.cantidad;
    } else {
      this.#monto = this.#monto + movi.cantidad;
    }
  }

  // obtenerGastosPorMes(mes) devuelve un array con todos los gastos hechos en el mes actual
  obtenerGastosPorMes(mes) {
    return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === 'GASTO');
  }

  // obtenerGanaciasPorMes(mes) devuelve un array con todas los ganancias obtenidas en mes
  obtenerGananciasPorMes(mes) {
    return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes && operacion.tipo === 'GANANCIA');
  }

  // obtenerGastosPorCategoria(categoria) devuelve un array con todos los gastos de cierta categoria
  obtenerGastosPorCategoria(cat) {
    return this.#operaciones.filter(movimiento => movimiento.tipo === 'GASTO' && movimiento.categoria === cat);
  }

  // obtenerGanaciasPorCategoria(categoria) devuelve un array con todas las ganancias de cierta categoria
  obtenerGanaciasPorCategoria(cat) {
    return this.#operaciones.filter(movimiento => movimiento.tipo === 'GANANCIA' && movimiento.categoria === cat);
  }

  // calcularTotalPorMes(mes) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en un cierto mes
  calcularTotalPorMes(mes) {
    return this.#operaciones
      .filter(movimiento => movimiento.fecha.getMonth() === mes)
      .reduce(
        (total, movimiento) => {
          if (movimiento.tipo === 'GASTO') {
            total = total - movimiento.cantidad
          } else {
            total = total + movimiento.cantidad
          }
          return total;
        }, 0
      );
  }


  // calcularTotalPorCategoria(categoria) devuelve el total resultante de restar todos los gastos hechos y sumar todas las ganancias obtenidas en cierta `categoria
  calcularTotalPorCategoria(cat) {
    return this.#operaciones
      .filter(movimiento => movimiento.categoria === cat)
      .reduce(
        (total, movimiento) => {
          if (movimiento.tipo === 'GASTO') {
            total = total - movimiento.cantidad
          } else {
            total = total + movimiento.cantidad
          }
          return total;
        }, 0
      );
  }

  // **obtenerMonto()** devuelve monto
  obtnerMonto() {
    return this.#monto;
  }
}


let cartera = new Wallet();

let m0 = new Movimiento(
  'Ingreso de nómina',
  3000,
  new Date(2024, 1, 1, 0, 0, 0, 0),
  'GANANCIA',
  'Nómina'
);

cartera.agregarMovimiento(m0);

let m1 = new Movimiento(
  'Compra de comida',
  150,
  new Date(2024, 1, 5, 0, 0, 0, 0),
  'GASTO',
  'Comida'
);

cartera.agregarMovimiento(m1);

let m2 = new Movimiento(
  'Compra de gasolina',
  120,
  new Date(2024, 1, 6, 0, 0, 0, 0),
  'GASTO',
  'Gasolina'
);

cartera.agregarMovimiento(m2);

console.log(cartera.obtenerGastosPorMes(1));
console.log(cartera.obtenerGananciasPorMes(1));
console.log(cartera.obtenerGastosPorCategoria('Gasolina'));
console.log(cartera.calcularTotalPorMes(1));
console.log(cartera.calcularTotalPorCategoria('Comida'));
