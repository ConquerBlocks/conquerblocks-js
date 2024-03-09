let divConId = document.getElementById("divimportante");

const primerParrafo = document.createElement("p");
primerParrafo.textContent =
  "Hola <strong>soy el contenido</strong> del párrafo";

const segundoParrafo = document.createElement("p");
segundoParrafo.innerHTML = "Hola <strong>soy el contenido</strong> del párrafo";

const tercerParrafo = document.createElement("p");
const contenido = document.createTextNode(
  "Contenido de tipo texto del tercer párrafo"
);
tercerParrafo.appendChild(contenido);

divConId.appendChild(primerParrafo);
divConId.appendChild(segundoParrafo);
divConId.appendChild(tercerParrafo);

console.log(primerParrafo.isConnected);

const primerDiv = document.createElement("div");
const miPrimerComentario = document.createComment("Estos son mis comentarios");
const miPrimerNodoDeTexto = document.createTextNode(
  "Este es el contenido de mi nodo de tipo texto"
);
