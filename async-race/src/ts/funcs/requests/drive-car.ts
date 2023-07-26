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

async function showWinAlert(carName: string, time: number) {
  winAlert.textContent = `${carName} went first (${time})`;
  setTimeout(function hideAlert() {
    winAlert.textContent = '';
  }, 5000);
}

async function finishRace(strip: HTMLDivElement, duration: number) {
  if (winner.id === 0) {
    winner.id = +strip.id;
    winner.time = +(duration / 1000).toFixed(2);
    showWinAlert(carsInfo.get(+strip.id).name, winner.time);
    createWinner(winner);
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
  if (btnB && btnB instanceof HTMLButtonElement) {
    btnB.disabled = false;
  }

  if (car && car instanceof HTMLDivElement) {
    const carAnim = car.animate([{ transform: 'translateX(calc(100vw - 250px)) scale(-1, 1)' }], {
      duration: dur,
      iterations: 1,
    });
    carAnim.onfinish = () => {
      car.style.transform = 'translateX(calc(100vw - 250px)) scale(-1, 1)';
      finishRace(raceStrip, dur);
    };

    fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=drive`, {
      method: 'PATCH',
    })
      .then((response) => {
        car.getAnimations().forEach((animation) => animation.pause());
        if (response.status === 200 && btnA instanceof HTMLButtonElement && btnA.disabled) {
          car.style.transform = 'translateX(calc(100vw - 250px)) scale(-1, 1)';
          finishRace(raceStrip, dur);
        }
      })
      .catch((e) => e);
  }
}
