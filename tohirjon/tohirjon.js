const brand = document.getElementById("brand");
const model = document.getElementById("model");
const price = document.getElementById("price");
const saveBtn = document.getElementById("save-btn");

const carId = new URLSearchParams(window.location.search).get("id");

axios.get(`https://6765c25c410f84999656159d.mockapi.io/cars/${carId}`).then((response) => {
  const car = response.data;
  brand.value = car.brand;
  model.value = car.model;
  price.value = car.price;
});

saveBtn.addEventListener("click", () => {
  const editedCar = {
    brand: brand.value,
    model: model.value,
    price: price.value,
  };
  axios
    .put(`https://6765c25c410f84999656159d.mockapi.io/cars/${carId}`, editedCar)
    .then((response) => {
      console.log(response);
      if (condition.statusCode === 200) {
        // window.location.href = "index.html";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
