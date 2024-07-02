import { getUsers, deleteUser, updateUser } from "./api.js";

let editUser = null;
const form = document.getElementById("form");
const userList = document.getElementById("user-list");

// render de usuarios
const renderUsers = async () => {
  const users = await getUsers();

  users.forEach((user) => {
    const element = document.createElement("li");

    element.innerHTML = `
      <span>${user.name} (${user.email})</span>
      <button type="button" class="edit" data-id="${user.id}">Editar</button>
      <button type="button" class="delete" data-id="${user.id}">Eliminar</button>
    `;

    userList.appendChild(element);
  });
};

// manejar el submit
const handleSubmit = async (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  await updateUser({ name, email, id: editUser ? editUser.id : null });

  form.reset();

  renderUsers();
};

// manejar el edit

const handleEdit = async (id, name, email) => {
  editUser = { id, name, email };

  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
};

// manejar el delete
const handleDelete = async (id) => {
  await deleteUser(id);

  renderUsers();
};

// agregar eventos al html

form.addEventListener("submit", handleSubmit);

userList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("edit")) {
    const id = target.getAttribute("data-id");
    const user = Array.from(target.parentNode.children)[0].innerText.split(
      " (",
    );

    const name = user[0];
    const email = user[1].replace(")", "");

    handleEdit(id, name, email);
  } else if (target.classList.contains("delete")) {
    const id = target.getAttribute("data-id");
    handleDelete(id);
  }
});

renderUsers();
