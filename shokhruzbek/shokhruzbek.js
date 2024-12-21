
const inputCity = document.getElementById('input-city');
console.log(inputCity);

const apiAddress = '178.218.203.109'
const container = document.querySelector('.container')

function showIp() {
    console.log(inputCity.target);
}
axios
    .get(`https://apiip.net/api/check?ip=${apiAddress}&accessKey=dc8cfcd1-e497-4151-bbb2-3f1e46167d27`)
    .then((response)=>{
        const country = response.data
    container.innerHTML = `
        <h2>Check IP Location</h2>
    <div class="result" id="result">
        <p><strong>Country:</strong> <span id="countryName"> ${country.countryName}</span></p>
        <p><strong>Capital:</strong> <span id="capital">${country.capital}</span></p>
        <p><strong>Phone Code:</strong> <span id="phoneCode">${country.phoneCode}</span></p>
        <p><strong>Official Name:</strong> <span id="officialCountryName">${country.officialCountryName}</span></p>
        <p><strong>Chegaradosh Davlatlar:</strong> <span id="borders">${country.borders}</span></p>
    </div>
    `
})
