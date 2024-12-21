const rasmlarKonteyner = document.getElementById('imagesContainer');
const fakultetFilter = document.getElementById('houseFilter');
let barcha_talabalar = [];

function talabalarniYuklash() {
    axios.get('https://harry-potter-api-3a23c827ee69.herokuapp.com/api/characters/students')
        .then((response) => {
            barcha_talabalar = response.data;
            const noyobFakultetlar = [...new Set(barcha_talabalar.map(talaba => talaba.house))];
            fakultetFilter.innerHTML = '<option value="all">Barcha fakultetlar</option>';
            noyobFakultetlar.forEach(fakultet => {
                if (fakultet) {
                    const variant = document.createElement('option');
                    variant.value = fakultet;
                    variant.textContent = fakultet;
                    fakultetFilter.appendChild(variant);
                }
            });

            talabalarniKorsatish(barcha_talabalar);
        })
        .catch((xato) => {
            console.error('Ma\'lumotlarni yuklashda xatolik:', xato);
            rasmlarKonteyner.innerHTML = '<p>Ma\'lumotlarni yuklashda xatolik yuz berdi</p>';
        });
}

function talabalarniKorsatish(talabalar) {
    rasmlarKonteyner.innerHTML = '';
    if (talabalar.length === 0) {
        rasmlarKonteyner.innerHTML = '<p>Bu fakultet bo\'yicha talabalar topilmadi</p>';
        return;
    }

    talabalar.forEach((talaba) => {
        if (!talaba.image || !talaba.name || !talaba.house) return;

        rasmlarKonteyner.innerHTML += `
            <div class="wrapper">
                <div class="card">
                    <div class="poster">
                        <img src="${talaba.image}" alt="${talaba.name}">
                    </div>
                    <div class="details">
                        <h1>${talaba.name}</h1>
                        <h1 class="name">${talaba.house}</h1>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span>4.2/5</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

fakultetFilter.addEventListener('change', (hodisa) => {
    const tanlangan_fakultet = hodisa.target.value;
    if (tanlangan_fakultet === 'all') {
        talabalarniKorsatish(barcha_talabalar);
    } else {
        const filtrlangan_talabalar = barcha_talabalar.filter(talaba => 
            talaba.house === tanlangan_fakultet
        );
        talabalarniKorsatish(filtrlangan_talabalar);
    }
});

talabalarniYuklash();