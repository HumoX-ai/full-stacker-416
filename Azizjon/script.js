const myApiKey = "9e11ad4fdb134d73bb644126241312";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weatherForm');
    const cityInput = document.getElementById('cityInput');
    const dateInput = document.getElementById('dateInput');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        try {
            const cityName = encodeURIComponent(cityInput.value.trim());
            const date = dateInput.value;
            
            const response = await axios.get(
                `https://api.weatherapi.com/v1/astronomy.json`, {
                    params: {
                        key: 'e0c4fcc2ca0449578ae35836241312',
                        q: cityName,
                        dt: date
                    }
                }
            );

            const astronomy = response.data.astronomy.astro;

            resultsDiv.innerHTML = `
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                        <h2 class="text-2xl font-bold text-white mb-4">${cityInput.value}</h2>
                        
                        <div class="space-y-6">
                            <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div class="flex items-center space-x-4 mb-4">
                                    <i class="fas fa-sun text-yellow-300 text-2xl"></i>
                                    <p class="text-white">Quyosh chiqishi: ${astronomy.sunrise}</p>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <i class="fas fa-sun text-orange-400 text-2xl"></i>
                                    <p class="text-white">Quyosh botishi: ${astronomy.sunset}</p>
                                </div>
                            </div>
                            
                            <div class="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div class="flex items-center space-x-4 mb-4">
                                    <i class="fas fa-moon text-gray-200 text-2xl"></i>
                                    <p class="text-white">Oy chiqishi: ${astronomy.moonrise}</p>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <i class="fas fa-moon text-gray-200 text-2xl"></i>
                                    <p class="text-white">Oy botishi: ${astronomy.moonset}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } catch (error) {
            resultsDiv.innerHTML = `
                <div class="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    Xatolik yuz berdi: ${error.response?.data?.error?.message || error.message}
                </div>
            `;
        }
    });
});

