let primerProducto = document.querySelector(".producto");

let newP = document.createElement("p");
newP.textContent = "Este párrafo es nuevo";

// console.log(primerProducto.textContent);
// console.log(primerProducto.innerText);
// console.log(primerProducto.innerHTML);
// console.log(primerProducto.outerHTML);

primerProducto.appendChild(newP);
primerProducto.removeChild(newP);

let newH2 = document.createElement("h2");
newH2.textContent = "Soy un nuevo H2";

let actualH3 = primerProducto.querySelector("h3");

console.log(primerProducto.childNodes);

// primerProducto.replaceChild(newH2, actualH3);
// actualH3.before(newH2);
// actualH3.replaceWith(newH2);
// actualH3.remove();
