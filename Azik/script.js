document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://api.ipify.org?format=json')
        .then((response) => {
            const ipAddress = response.data.ip;
            document.getElementById('ip-display').textContent = `Your IP Address is: ${ipAddress}`;
        })
        .catch((error) => {
            document.getElementById('ip-display').textContent = 'Failed to load IP address.';
            console.error('Error fetching IP address:', error);
        });
});