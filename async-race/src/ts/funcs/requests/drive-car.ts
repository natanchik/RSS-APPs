import { winAlert } from '../../blocks/garage';
import { Winner } from '../../types';
import { createWinner } from './create-winner';
import { stopCar } from './stop-car';

export const carsInfo = new Map();
export const winner: Winner = {
  id: 1,
  time: 0,
  name: '',
  color: '',
};

const carAnimation = {
  transform: 'translateX(calc(100vw - 250px)) scale(-1, 1)',
  animationFillMode: 'forwards',
};

async function showWinAlert(carName: string, time: number) {
  winAlert.textContent = `${carName} went first (${time})`;
  setTimeout(function hideAlert() {
    winAlert.textContent = '';
  }, 5000);
}

async function finishRace(strip: HTMLDivElement, duration: number) {
  if (winner.id === 0) {
    const carInfo = carsInfo.get(+strip.id);
    winner.id = +strip.id;
    winner.time = +(duration / 1000).toFixed(2);
    winner.name = carInfo.name;
    winner.color = carInfo.color;
    showWinAlert(winner.name, winner.time);
    createWinner(winner);
  }
}

async function pauseAnimation(car: Element | null) {
  if (car && car instanceof HTMLDivElement) {
    car.getAnimations().forEach((animation) => animation.pause());
  }
}

export async function driveCar(raceStrip: HTMLDivElement, velocity: number) {
  const car = raceStrip.querySelector('.car');
  const dur = 500000 / velocity;

  const btnA = raceStrip.querySelector('.btn-a');
  if (btnA && btnA instanceof HTMLButtonElement) {
    btnA.disabled = true;
  }
  const btnB = raceStrip.querySelector('.btn-b');

  if (car && car instanceof HTMLDivElement) {
    const carAnim = car.animate([carAnimation], { duration: dur, iterations: 1 });
    carAnim.onfinish = () => {
      car.style.transform = 'translateX(calc(100vw - 250px)) scale(-1, 1)';
      finishRace(raceStrip, dur);
      stopCar(raceStrip);
    };
  }

  if (btnB && btnB instanceof HTMLButtonElement) {
    btnB.disabled = false;
  }

  fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=drive`, {
    method: 'PATCH',
  })
    .then(() => {
      pauseAnimation(car);
      stopCar(raceStrip);
    })
    .catch((e) => `${e}`);
}
