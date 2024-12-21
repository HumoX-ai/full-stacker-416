document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('ip-display');

    axios.get('https://api.ipify.org?format=json')
        .then((response) => {
            const ipAddress = response.data.ip;
            display.textContent = ''; 

            
            const parts = ipAddress.split('.');
            
            parts.forEach((part, index) => {
                const span = document.createElement('span');
                span.textContent = part;
                span.classList.add('ip-part');
                span.style.animationDelay = `${index * 0.6}s`;
                
                
                display.appendChild(span);
                if (index < parts.length - 1) {
                    const dot = document.createElement('span');
                    dot.textContent = '.';
                    dot.classList.add('ip-part');
                    dot.style.animationDelay = `${index * 0.6}s`; 
                    display.appendChild(dot);
                }
            });
        })
        .catch((error) => {
            display.textContent = 'Failed to load IP address.';
            console.error('Error fetching IP address:', error);
        });
});
