document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.getElementById("results");

    searchButton.addEventListener("click", async () => {
        const query = searchInput.value.trim();
        console.log("Query: ", query);  // inputdan olingan qiymatni tekshirish

        if (!query) {
            alert("Iltimos, universitet nomini kiriting!");
            return;
        }

        try {
            const response = await fetch(`http://universities.hipolabs.com/search?name=${query}`);
            console.log("Response status: ", response.status);  // response statusini tekshirish

            if (!response.ok) {
                throw new Error("API'dan ma'lumot olishda xatolik yuz berdi!");
            }

            const data = await response.json();
            console.log("Data: ", data);  // API'dan olingan natijani tekshirish
            displayResults(data);
        } catch (error) {
            console.error("Error: ", error.message);
            resultsContainer.innerHTML = `<p class="error">Ma'lumotni yuklashda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring!</p>`;
        }
    });

    function displayResults(universities) {
        resultsContainer.innerHTML = "";

        if (universities.length === 0) {
            resultsContainer.innerHTML = `
                <div style="text-align: center;">
                    <p style="font-size: 18px; margin-top: 10px;">Bunday ma'lumot yo'q</p>
                </div>
            `;
            return;
        }

        universities.forEach(university => {
            const link = document.createElement("a");
            link.href = university.web_pages[0]; // Havolani birinchi `web_pages` qiymatiga ulaymiz
            link.textContent = "University Page"; // Aylananing ichida ko'rsatiladigan matn
            link.target = "_blank";
            link.classList.add("link-style");

            const universityDiv = document.createElement("div");
            universityDiv.classList.add("university");

            const name = document.createElement("h3");
            name.textContent = university.name;

            universityDiv.appendChild(link);
            universityDiv.appendChild(name);
            resultsContainer.appendChild(universityDiv);
        });
    }
});
