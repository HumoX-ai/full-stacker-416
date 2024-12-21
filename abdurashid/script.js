const container = document.getElementById('ota-div');
const searchInput = document.getElementById('search');

axios
    .get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
    .then((response) => {
        cars = response.data.Results
        displayCars(cars); 
    })
    .catch((err) => {
        console.log(err);  
    });

function displayCars(cars) {
    container.innerHTML = ''
    cars.forEach((car) => {
        const vehicleTypes = car.VehicleTypes.map(
            (type) => `<span class="vehicle-type">${type.Name}</span>`
        ).join('')
    
        container.innerHTML += `
            <div class="card">
                <div class="card-header">${car.Mfr_CommonName}</div>
                <div class="card-body">
                    <div class="card-info">
                        <span class="card-info-label">Mamlakat:</span>
                        <span class="card-info-value">${car.Country}</span>
                    </div>
                    <div class="card-info">
                        <span class="card-info-label">Turlari:</span>
                        <div class="vehicle-types">${vehicleTypes}</div>
                    </div>
                </div>
            </div>
        `;
    });
}