// https://jsonplaceholder.typicode.com/

// Qué es una API
// Listar => GET /todos/1
// Crear => POST /todos
// Modificar => PUT /todos/1
// Borrar => DELETE /todos/1

const URLAPIBASE = 'https://jsonplaceholder.typicode.com/todos/';

// Veamos qué dos devuelve nuestro primer fetch
fetch(URL, {
  method: 'POST', // GET, POST, PUT, DELETE
  // Sirve para enviar credenciales y para indicar que estamos enviando un JSON
  headers: {
    'Content-Type': 'application/json',
    // Authorization: 'api key'
  },
    cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
    body: JSON.stringify({
      title: 'Mi tarea de prueba',
    })
  })
  .then(response => {
    console.log(response)
  });


// https://jsonplaceholder.typicode.com/guide/


// Formulario para crear un Todo primero estático
// formulario para crear un Todo seleccionando un usuario
