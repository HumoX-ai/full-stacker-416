document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;
    const currencySelect = document.getElementById('currency');
    const form = document.getElementById('currency-form');
    const resultDiv = document.getElementById('result');


    axios.get(apiUrl)
        .then(response => {
            const rates = response.data.eur;
            for (let currency in rates) {
                let option = document.createElement('option');
                option.value = rates[currency];
                option.textContent = currency;
                currencySelect.appendChild(option);
            }
        })
        .catch(() => {
            resultDiv.textContent = 'Valyuta maʼlumotlarini olishda xatolik yuz berdi. Keyinroq qayta urinib ko‘ring.';
            resultDiv.classList.add('text-red-500');
        });


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // amount — Foydalanuvchi tomonidan kiritilgan evro miqdorini oladi.
        // parseFloat(...) — Matn sifatida olingan qiymatni o'nlik son (float) ko'rinishiga aylantiradi.
        // rate — Foydalanuvchi tanlagan valyutaning kurs (qiymat) ma'lumotlarini oladi.
        // parseFloat(...) — Bu qiymatni raqamga aylantiradi.
        // currencySelect.selectedIndex — Tanlangan valyutaning qaysi indexda joylashganligini topadi,

        const amount = parseFloat(document.getElementById('amount').value);
        const rate = parseFloat(currencySelect.value);
        const currency = currencySelect.options[currencySelect.selectedIndex].text;

        if (isNaN(amount) || isNaN(rate)) {
            resultDiv.textContent = 'Yaroqli miqdorni kiriting va valyutani tanlang.';
            resultDiv.classList.add('text-red-500');
        } else {
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.textContent = `${amount} EUR = ${convertedAmount} ${currency}`;
            resultDiv.classList.remove('text-red-500');
        }
    });
});