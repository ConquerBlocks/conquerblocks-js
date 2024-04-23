console.log("Empezamos con la corrección");

// 1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
// let primerParrafo = document.getElementsByTagName("p")[0];
// primerParrafo.textContent = "hola que tal";

// 2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
// let primerParrafo = document.getElementsByTagName("p")[0];
// enlaces = primerParrafo.getElementsByTagName("a");
// enlaces[1].setAttribute("href", "http://www.google.com");

// 3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
// let milista = document.getElementById("milista");
// let hijos = milista.children;
// let penultimo = hijos[hijos.length - 2];

// 4. Desactiva el atributo class del último p de la página
// let parrafos = document.getElementsByTagName("p");
// let ultimoParrafo = parrafos[parrafos.length - 1];
// ultimoParrafo.removeAttribute("class");

// 5. Crea un elemento h3 e insertalo al final del body
// let newH3 = document.createElement("h3");
// newH3.textContent = "Hola soy un nuevo H3";
// document.body.appendChild(newH3);

// 6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
// let newSpan = document.createElement("span");
// newSpan.textContent = " Soy nuevo";
// newH3.appendChild(newSpan);

// 7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
// let segundoP = document.getElementsByTagName("p")[1];
// let newA = document.createElement("a");
// newA.setAttribute("href", "https://google.com");
// newA.textContent = " aquí";
// segundoP.appendChild(newA);

// 8. Comprueba que todos los  p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
// let parrafos = document.querySelectorAll("div.hero p");
// for (let p of parrafos) {
//   if (p.hasAttribute("class")) {
//     p.remove();
//   }
// }

// 9. Selecciona el último nodo hijo de body
// let ultimoElemento = document.body.lastElementChild;

// 10. Selecciona el siguiente elemento hermano del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let siguienteHermano = primerP.nextElementSibling;

// 11. Borra el último elemento de body
// let ultimoElemento = document.body.lastElementChild;
// ultimoElemento.remove();

// 12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
// let imagenes = document.getElementsByTagName("img");
// for (let i of imagenes) {
//   debugger;
//   if (i.getAttribute("src") === "cambiame") {
//     i.setAttribute("src", "cambiado");
//   }
// }

// 13. Dale la clase "claseejemplo" al primer p
// let primerP = document.getElementsByTagName("p")[0];
// // primerP.setAttribute("class", "claseejemplo");
// primerP.classList.add("claseejemplo");

// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
// let listas = document.getElementsByTagName("ul");
// for (let lista of listas) {
//   if (lista.children.length === 2) {
//     let newLi = document.createElement("li");
//     newLi.textContent = "Tercer elemento";
//     lista.appendChild(newLi);
//   }
// }

// 15. Selecciona el padre del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let padre = primerP.parentElement;

// 16. Selecciona el hermano anterior del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let hermanoAnterior = primerP.previousElementSibling;

// 17. Selecciona el primer div con clase "container" y modifica su background-color a red
// let primerDivConClase = document.querySelector("div.container");
// primerDivConClase.style.backgroundColor = "red";

// 18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
// let pConId = document.getElementById("text");
// pConId.innerHTML = '<a href="www.google.com">Google</a>';

// 19. Selecciona los div con clase "eustakio"
// let divs = document.querySelectorAll('div.estakio');

// 20. Selecciona el párrafos que un ID con valor "paisa"
// let parrafo = document.getElementById('paisa');

// 21. Selecciona el primer párrafo hijo de un div
// let primerP = document.querySelector('div > p:first-child');

// 22. Selecciona el penúltimo enlace de las página.
// let enlaces = document.getElementsByTagName("a");
// let penultimoEnlace = enlaces[enlaces.length - 2];

// 23. Selecciona el antepenúltimo párrafo de los div y añádele la clase "portatil" si no la tiene, y en caso de tenerla, que la elimine.
// let divs = document.getElementsByTagName("div");
// for (let div of divs) {
//   let parrafosDelDiv = div.getElementsByTagName("p");
//   if (parrafosDelDiv.length >= 3) {
//     let penultimoParrafo = parrafosDelDiv[parrafosDelDiv.length - 3];
//     penultimoParrafo.classList.toggle("portatil");
//   }
// }

// 24.Selecciona el padre de del primer li de la página
// let padre = document.getElementsByTagName("li")[0].parentElement;

// 25. Para todas las listas ordenadas que tengan únicamente dos elementos, insertar otro elemento entre los dos elementos
// let listasOrdenadas = document.getElementsByTagName("ol");
// for (let lista of listasOrdenadas) {
//   if (lista.children.length === 2) {
//     let newLi = document.createElement("li");
//     newLi.textContent = "Elemento intermedio";
//     lista.insertBefore(newLi, lista.lastElementChild);
//   }
// }

// 26. Añade el atributo class con valor azul al último elemento p
// let parrafos = document.getElementsByTagName("p");
// let ultimoP = parrafos[parrafos.length - 1];
// ultimoP.classList.add("azul");

// 27. Comprueba los elementos div que tengan el atributo class, si lo tiene se debe añadir el valor container, y si no lo tiene no se hace nada.
// let divs = document.getElementsByTagName("div");
// for (let div of divs) {
//   if (div.hasAttribute("class")) {
//     div.classList.add("container");
//   }
// }

// 28. Obtén el valor del atributo alt de la última imagen
// let imagenes = document.getElementsByTagName('img');
// let ultimaImagen = imagenes[imagenes.length - 1];
// let altUltimaImagen = ultimaImagen.getAttribute('alt');

// 29. Suponiendo que tenemos <span class="textoAzul" id="primerspan2">Hola</span>. Obtén los valores de los atributos y los imprimes por pantalla uno por uno.
// let primerspan2 = document.getElementById("primerspan2");
// for (let attr of primerspan2.attributes) {
//   console.log(`${attr.name} vale ${attr.value}`);
// }

// 30. Si tenemos lo siguiente, modifica el estilo para que el font-size sea de 40px, el color sea naranja y el texto se alinee a la derecha.
// h1{
//   font-size: 20px;
//   color: red;
//   text-align: center;
// }

// let h1 = document.querySelector("h1");
// h1.style.fontSize = "40px";
// h1.style.color = "orange";
// h1.style.textAlign = "right";

// 31. Suponiendo que tenemos el siguiente código. Añade debajo un tercer p, otro p que diga "soy el tres";
//   <div id="parrafos">
//     <p>hola soy el uno</p>
//     <p>hola soy el dos</p>
//   </div>

// let parrafos = document.getElementById("parrafos");
// let newP = document.createElement("p");
// newP.textContent = "Soy el tres";
// parrafos.appendChild(newP);

// 32. Haz lo mismo que el anterior pero en lugar de insertarlo debajo, insertalo en medio, el p tendrá el texto “hola yo soy el uno y medio”.

// let parrafos = document.getElementById("parrafos");
// let newP = document.createElement("p");
// newP.textContent = "Soy el tres";
// parrafos.insertBefore(newP, parrafos.lastElementChild);

// 33. Añade un nuevo elemento a una lista de modo que ocupe la primera posición.

// let newLi = document.createElement("li");
// newLi.textContent = "Hola soy nuevo";

// let lista = document.querySelector("ul");
// lista.insertBefore(newLi, lista.firstElementChild);

// 34. Obtén el primer elemento de entre todos los que tengan la clase 'class' y bórralo.

// let elemento = document.querySelector(".class").remove();

// 35. Convierte el primer elemento de una lista en un enlace.

// let lista = document.querySelector("ul");
// let primerHijo = lista.firstElementChild;

// let newA = document.createElement("a");
// newA.textContent = primerHijo.textContent;

// lista.insertBefore(newA, primerHijo);
// primerHijo.remove();

// 36. Borra el atributo title de todas las imágenes con la clase 'img'.

// let imagenes = document.querySelectorAll('img.img');
// for (let img of imagenes) {
//   img.removeAttribute('title');
// }

// 37. Añade un punto final al texto contenido por las etiquetas p.

// let parrafos = document.getElementsByTagName("p");
// for (let p of parrafos) {
//   let newTex = document.createTextNode(".");
//   p.append(newTex);
// }

// 38. De un conjunto de etiquetas article hijos de un section con la clase "products", selecciona aquellos que tengan la clase "oferta" y establece el valor de su atributo data-iva a cero

// let articles = document.querySelectorAll("section.products > article.oferta");
// for (let art of articles) {
//   art.setAttribute("data-iva", "0");
//   art.dataset.iva = 0;
// }

// 39. Añade el texto "Modificado" al tercer <li> de todos los <ul>

// let uls = document.getElementsByTagName("ul");
// for (let ul of uls) {
//   let newTextNode = document.createTextNode("Modificado");
//   if (ul.children.length >= 3) {
//     ul.children[2].append(newTextNode);
//   }
// }

// 40. Incluye la clase porelasterisco en todos los p que tengan la clase preparado

// let ps = document.querySelectorAll('p.preparado');
// for (let p of ps) {
//   p.classList.add('porelasterisco');
// }

// 41. Inserta un div con la clase pepaino y cuyo border sea rojo, con dos etiquetas hijas p, en las que el primer párrafo sea la clase del div y el segundo párrafo sea el color del border.

// let newDiv = document.createElement("div");
// newDiv.classList.add("pepaino");
// newDiv.style.borderColor = "red";

// let newP1 = document.createElement("p");
// newP1.textContent = "pepaino";
// let newP2 = document.createElement("p");
// newP2.textContent = "red";
// newDiv.append(newP1);
// newDiv.append(newP2);

// document.body.append(newDiv);

// 42. De las listas no ordenadas, selecciona el primer y último hijo "li" y sus hermanos anteriores o posteriores y cambiales el color a azul

// let listasNoOrdenadas = document.getElementsByTagName("ul");

// for (let ul of listasNoOrdenadas) {
//   let primerHijo = ul.firstElementChild;
//   let ultimoHijo = ul.lastElementChild;
//   let segundoHijo = ul.children[1];
//   let penultimoHijo = ul.children[ul.children.length - 2];
//   primerHijo.style.color = "blue";
//   ultimoHijo.style.color = "blue";
//   segundoHijo.style.color = "blue";
//   penultimoHijo.style.color = "blue";
// }

// 43. Seleccionar los span que sean hijos de un "p" cuyo padre del elemento "p" sea un div con la clase "padre" y cambia los estilos del div, cambiando el borde a azul.

// let spans = document.querySelectorAll('div.padre > p > span');
// for (let span of spans) {
//   span.parentElement.parentElement.style.borderColor = 'blue';
// }
