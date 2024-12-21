const container = document.querySelector(".card-container");

axios
  .get("https://6765c25c410f84999656159d.mockapi.io/cars")
  .then((response) => {
    const cars = response.data;

    cars.map((car) => {
      container.innerHTML += `
    <div class="car-card" id="${car.id}">
      <div class="card-header">
        <h2 class="car-title">
          ${car.model}
        </h2>
      </div>
      <div class="card-body">
        <div class="card-info">
          <div class="newyear">
            <p class="year">Brand: ${car.brand}</p>
          </div>
          <div class="newyear">
            <p class="year">Price: ${car.price}</p>
          </div>
        </div>
        <div class="button-group">
          <a href="#" class="btn btn-ask" onclick="deleteCar(${car.id})">
            Delete
          </a>
          <a href="#" class="btn btn-request" onclick="editCar(${car.id})">
            Edit
          </a>
        </div>
      </div>
    </div>
  `;
    });
  })
  .catch((err) => {
    console.log(err);
  });

function deleteCar(id) {
  axios
    .delete(`https://6765c25c410f84999656159d.mockapi.io/cars/${id}`)
    .then((response) => {
      document.getElementById(id).remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function editCar(id) {
  window.location.href = `tohirjon.html?id=${id}`;
}