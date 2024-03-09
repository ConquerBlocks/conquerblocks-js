let primerDiv = document.querySelector("div");

console.log(`Contenido del atributo ID: ${primerDiv.id}`);
primerDiv.id = "divconID";
console.log(`Contenido del atributo ID: ${primerDiv.id}`);
primerDiv.className = "importante negrita";
primerDiv.style = "color: blue;";

primerDiv.setAttribute("pepito", "");

let input = document.getElementById("name");

input.toggleAttribute("required");
