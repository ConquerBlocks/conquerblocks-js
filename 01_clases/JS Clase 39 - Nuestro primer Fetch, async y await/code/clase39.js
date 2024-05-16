console.log("Empezamos la clase 39");

// const URL = "https://jsonplaceholder.typicode.com/users/1";

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       console.log(response);
//       return response.json();
//     }

//     return Promise.reject(
//       "No se ha encontrado el usuario con ese identificador"
//     );
//   })
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

const URLCARS = "https://myfakeapi.com/api/cars/";
const URLUNIQUECAR = "https://myfakeapi.com/api/cars/5";

// const getCars = async (year = 2010) => {
//   const cars = await fetch(URLCARS)
//     .then((response) => response.json())
//     .then((cars) => cars["cars"].filter((car) => car.car_model_year == year));
//   console.log(cars);
// };

// getCars(2011);

// const getCarsFromFirtCarYear = async () => {
//   const firstCarYear = await fetch(URLCARS)
//     .then((response) => response.json())
//     .then((cars) => cars["cars"][0].car_model_year);

//   const allCarsFilterByYear = await fetch(URLCARS)
//     .then((response) => response.json())
//     .then((cars) =>
//       cars["cars"].filter((car) => car.car_model_year == firstCarYear)
//     );
//   console.log(allCarsFilterByYear);
// };

// getCarsFromFirtCarYear();
