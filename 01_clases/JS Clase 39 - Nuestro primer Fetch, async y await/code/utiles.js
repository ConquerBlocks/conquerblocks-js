// https://jsonplaceholder.typicode.com/

// Qué es una API
// Listar => GET /todos/1
// Crear => POST /todos
// Modificar => PUT /todos/1
// Borrar => DELETE /todos/1

const URLAPIBASE = 'https://jsonplaceholder.typicode.com/todos/';

// Veamos qué dos devuelve nuestro primer fetch
fetch(URL)
  .then(response => {
    console.log(response)
  });

// Clase Response
// Propiedad ok
// Status
// Cuerpo de la respuesta
// ¿Cómo podemos modificar el cuerpo de la respuesta?

// response.json() devuelve una promesa

// Esto solo sirve para apis que devuelven formato JSON (casi todas)
fetch(URL)
  .then(response => response.json())
  .then(todo => console.log(todo));

// Si la API no devuelve un JSON, podemos utilizar response.text() o response.blob()
// Si la api no devuelve formato json, y hacemos .json tendremos un error por no poder parsearlo
fetch(URL)
  .then(response => response.text())
  .then(todo => console.log(todo));


// Probemos a buscar un todo concreto
'https://jsonplaceholder.typicode.com/todos/1'

// Probemos a buscar un todo que no existe y comprobemos que se ejecuta el then y no el catch
'https://jsonplaceholder.typicode.com/todos/a'

// ¿Cómo capturamos el error?
// Tenemos que rechazar una promesa con Promise.reject comprobando la propiedad ok de la respuesta o el status 200-299

// Probemos Async y Await


const obtenerTodo = async(idTodo) => {
  let todo = await fetch(`https://jsonplaceholder.typicode.com/todos/{idTodo}`)
  let todoJson = await todo.json();
  console.log('Esto se ejecuta después de obtener el Todo de la API y antes de ser devuelto');
  return todoJson;
}

const pruebaFuncionAsincrona = async () => {
  const todo = await obtenerTodo(1);
  console.log(todo);
}

console.log('Antes de ejecutar la función asíncrona');
pruebaFuncionAsincrona();
console.log('Después de ejecutar la función asíncrona');


//
const API = 'https://api.escuelajs.co/api/v1';

//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi) { //siempre async antes de function
    const response = await fetch(urlApi); //hacemos uso del fetch()
    const data = await response.json(); //estructura de los datos transformandolos en json
    return data; //retorna la información de la API que estamos solicitando
}

//también se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async (urlApi) => {
    //En try estará todo lo que queremos que suceda con la lógica de la aplicación
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}

anotherFunction(API); //se hace el llamado
