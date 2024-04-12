let h1 = document.querySelector("h1");
let boton = document.querySelector("button");

boton.addEventListener("click", () => console.log("Has pulsado el botón"));

h1.addEventListener("mouseenter", () => {
  let newClick = new Event("click");
  boton.dispatchEvent(newClick);
});

let padre = document.querySelector(".padre");
let hijo = document.querySelector(".hijo");

document.body.addEventListener("click", () => {
  console.log("Evento lanzado desde el body");
});

padre.addEventListener("click", () => {
  console.log("Evento lanzado desde el padre");
});

hijo.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Evento lanzado desde el hijo");
});
