console.log("Empieza el ejercicio");

let buttonSubmit = document.getElementById("buttonSubmit");
let buttonReset = document.getElementById("buttonReset");
let primerForm = document.forms[0];

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Botón de envío pulsado");
  debugger;
  // comprobamos que el email tiene una @
  if (primerForm.elements[0].value.includes("@")) {
    primerForm.submit();
  } else {
    alert("Debe añadir una @ en el campo de texto");
  }
});

buttonReset.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Botón de reset pulsado");
  primerForm.reset();
});
