const racer1 = document.getElementById('racer1');
const racer2 = document.getElementById('racer2');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');

let timerInterval;

function startRace() {
  const trackWidth = document.querySelector('.container').offsetWidth;

  let position1 = 0;
  let position2 = 0;
  let seconds = 0;

  timerInterval = setInterval(() => {
    seconds++;
    timerDisplay.textContent = seconds;
  }, 1000);

  const speed1 = Math.random() * 5 + 2;
  const speed2 = Math.random() * 5 + 2;

  const move1 = setInterval(() => {
    position1 += speed1;
    racer1.style.left = position1 + 'px';
    if (position1 + 100 >= trackWidth) {
      clearInterval(move1);
      clearInterval(move2);
      clearInterval(timerInterval);
      alert('Rocket 1 Wins!');
      endRace();
    }
  }, 20);

  const move2 = setInterval(() => {
    position2 += speed2;
    racer2.style.left = position2 + 'px';
    if (position2 + 100 >= trackWidth) {
      clearInterval(move1);
      clearInterval(move2);
      clearInterval(timerInterval);
      alert('Rocket 2 Wins!');
      endRace();
    }
  }, 20);
}

function resetRace() {
  racer1.style.left = '0';
  racer2.style.left = '0';
  timerDisplay.textContent = '0';
  startBtn.classList.remove('hidden');
  resetBtn.classList.add('hidden');
}

function endRace() {
  startBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
}

startBtn.addEventListener('click', () => {
  resetRace();
  startRace();
});

resetBtn.addEventListener('click', resetRace);
