function mostrarAlert() {
  alert("Botón pulsado");
}

let segundoBoton = document.getElementById("segundoBoton");
segundoBoton.setAttribute("onClick", "mostrarAlert()");

function mostrarConsole() {
  console.log("Escribiendo algo por consola");
}

let tercerBoton = document.getElementById("tercerBoton");
tercerBoton.addEventListener("click", function () {
  alert("Botón pulsado");
});
tercerBoton.addEventListener("click", mostrarConsole);

tercerBoton.removeEventListener("click", function () {
  alert("Botón pulsado");
});

let cuartoBoton = document.getElementById("cuartoBoton");
cuartoBoton.addEventListener("click", function (event) {
  console.log("He pulsado el cuarto botón.");
  console.log(event);
});

let botones = document.getElementsByTagName("button");
for (let boton of botones) {
  boton.addEventListener("click", (event) =>
    console.log("He pulsado el botón", event.target)
  );
}
