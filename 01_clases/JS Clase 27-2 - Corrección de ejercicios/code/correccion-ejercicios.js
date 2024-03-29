console.log("Empezamos con la corrección");

function colorAleatorio() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue}`;
}

let elementos = document.body.getElementsByTagName("*");

for (let elemento of elementos) {
  elemento.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = colorAleatorio();
  });

  elemento.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
  });

  elemento.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}
