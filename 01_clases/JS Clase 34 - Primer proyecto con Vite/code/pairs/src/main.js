import "../sass/main.scss";

import Game from "./class/Game";
import Box from "./class/Box";

let rows = parseInt(prompt("Introduzca el número de filas"));
let cols = parseInt(prompt("Introduzca el número de columnas"));

let game = new Game(rows, cols, "game");
let box = new Box();
