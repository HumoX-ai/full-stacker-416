const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

function clearLights() {
  redLight.classList.remove('red');
  yellowLight.classList.remove('yellow');
  greenLight.classList.remove('green');
}

function trafficLight() {
  let currentStep = 0;
  setInterval(() => {
    clearLights();
    if (currentStep === 0) {
      redLight.classList.add('red');
    } else if (currentStep === 1) {
      yellowLight.classList.add('yellow');
    } else if (currentStep === 2) {
      greenLight.classList.add('green');
    } else if (currentStep === 3) {
      yellowLight.classList.add('yellow');
    }
    currentStep = (currentStep + 1) % 4;
  }, currentStep === 1 || currentStep === 3 ? 1000 : 5000);
}

trafficLight();