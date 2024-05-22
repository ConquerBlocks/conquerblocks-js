console.log("Empieza la clase 40 de JS");

// https://jsonplaceholder.typicode.com/

// Qué es una API
// Listar => GET /todos/1
// Crear => POST /todos
// Modificar => PUT /todos/1
// Borrar => DELETE /todos/1

const URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

// fetch(URL_TODOS, {
//   method: "POST", // GET, POST, PUT, DELETE,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     userId: 1,
//     title: "Esta es mi nueva tarea",
//   }),
// })
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);
//     fetch(`${URL_TODOS}/10`)
//       .then((response) => response.json())
//       .then((todo) => console.log(todo));
//   })
//   .catch((error) => console.log(error));

let form = document.getElementById("createTodo");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let todoName = document.getElementById("todoName");
  let todoCompleted = document.getElementById("todoCompleted").checked;
  let todoUser = document.getElementById("userTodo");
  let saveTodo = document.getElementById("saveTodo");

  saveTodo.disable = true;
  saveTodo.textContent = "Enviando...";
  fetch(URL_TODOS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: todoUser.value,
      title: todoName.value,
      completed: todoCompleted,
    }),
  })
    .then((response) => response.json())
    .then((todo) => {
      console.log(todo);
      todoName.value = "";
      todoCompleted.checked = false;
      saveTodo.disabled = false;
      saveTodo.textContent = "Guardar";
      todoUser.value = "";
    })
    .catch((error) => console.log(error));
});

const getUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((users) => users);

  let userTodo = document.getElementById("userTodo");

  users.map((user) => {
    let newOption = document.createElement("option");
    newOption.value = user.id;
    newOption.textContent = user.name;
    userTodo.appendChild(newOption);
  });
};

getUsers();
