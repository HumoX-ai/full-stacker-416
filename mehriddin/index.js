let allCountries = [];

const getCountries =() => {

     axios.get("https://restcountries.com/v3.1/all").then((response) =>{
         allCountries = response.data;
         displayCountries(allCountries);
         console.log(allCountries);
     }).catch((error) =>{
        console.log(error.message);
        
     })
}

const displayCountries = (countries) => {
  const container = document.getElementById("countriesContainer");
  container.innerHTML = "";

  countries.map((country) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md overflow-hidden";
    card.innerHTML = `
            <img src="${country.flags.png}" alt="${
      country.name.common
    } flag" class="w-full h-48 object-cover">
            <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">${
                  country.name.common
                }</h2>
                <p><strong>Capital:</strong> ${
                  country.capital?.[0] || "N/A"
                }</p>
                <p><strong>Currency:</strong> ${
                  Object.values(country.currencies || {})[0]?.name || "N/A"
                } </p>
                <p><strong>Currency symbol:</strong> ${
                  Object.values(country.currencies || {})[0]?.symbol || "N/A"
                } </p>
            </div>
        `;
    container.appendChild(card);
  });
};

const filterCountries = () => {
    // Foydalanuvchi kiritgan qiymatlarni olish
    const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
    const capitalFilter = document.getElementById("capitalFilter").value.toLowerCase();
    const regionFilter = document.getElementById("regionFilter").value;
    const languageFilter = document.getElementById("languageFilter").value.toLowerCase();
    const timezoneFilter = document.getElementById("timezoneFilter").value;
  
    // Mamlakatlarni filtrlash
    const filteredCountries = allCountries.filter((country) => {
      const matchesName = country.name.common.toLowerCase().includes(nameFilter);
      const matchesCapital = country.capital?.[0]?.toLowerCase().includes(capitalFilter) || !capitalFilter;
      const matchesRegion = country.region === regionFilter || !regionFilter;
      const matchesLanguage = Object.values(country.languages || {}).some((lang) =>
        lang.toLowerCase().includes(languageFilter)
      ) || !languageFilter;
      const matchesTimezone = country.timezones.some((tz) => tz.includes(timezoneFilter)) || !timezoneFilter;
  
      return matchesName && matchesCapital && matchesRegion && matchesLanguage && matchesTimezone;
    });
  
    // Filtrlangan mamlakatlarni ekranga chiqarish
    displayCountries(filteredCountries);
  };
  

getCountries();

const filterInputs = document.querySelectorAll("input, select");

filterInputs.forEach((input) => {
  input.addEventListener("input", filterCountries);
});
