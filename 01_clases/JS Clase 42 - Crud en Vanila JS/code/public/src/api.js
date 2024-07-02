const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  const response = await fetch(API_URL);

  return await response.json();
};

export const deleteUser = async (id) => {
  const responser = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  return await responser.json();
};

export const updateUser = async (user) => {
  const url = user.id ? `${API_URL}/${user.id}` : API_URL;
  const method = user.id ? "PUT" : "POST";

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
};
