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

