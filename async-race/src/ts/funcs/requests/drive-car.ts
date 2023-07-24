import { velocities } from './start-car';
import { stopCar } from './stop-car';
import { winAlert } from '../../blocks/garage';
import { Winner } from '../../types';
import { createWinner } from './create-winner';

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

export async function driveCar(raceStrip: HTMLDivElement) {
  const car = raceStrip.querySelector('.car');
  const dur = 500000 / velocities.get(raceStrip.id);
  if (car && car instanceof HTMLDivElement) {
    const carAnim = car.animate([carAnimation], { duration: dur, iterations: 1 });
    carAnim.onfinish = () => {
      car.style.transform = 'translateX(calc(100vw - 250px)) scale(-1, 1)';
      finishRace(raceStrip, dur);
    };
  }
  fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=drive`, {
    method: 'PATCH',
  })
    .then(() => {
      pauseAnimation(car);
    })
    .catch((e) => `${e}`);

  const btnB = document.getElementById('btn-b');
  btnB?.addEventListener('click', () => {
    pauseAnimation(car);
    stopCar(raceStrip);
  });
}

export async function driveCars() {
  const cars = document.querySelectorAll('.race-strip');
  cars.forEach((car) => {
    if (car instanceof HTMLDivElement) {
      driveCar(car);
    }
  });
}
