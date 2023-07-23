import { velocities } from './start-car';
import { stopCar } from './stop-car';

export async function driveCar(raceStrip: HTMLDivElement) {
  const car = raceStrip.querySelector('.car');
  const dur = 500000 / velocities.get(raceStrip.id);
  if (car && car instanceof HTMLDivElement) {
    const carAnim = car.animate(
      [
        {
          transform: 'translateX(calc(100vw - 250px)) scale(-1, 1)',
          animationFillMode: 'forwards',
        },
      ],
      {
        duration: dur,
        iterations: 1,
      },
    );
    carAnim.onfinish = () => {
      car.style.transform = 'translateX(calc(100vw - 250px)) scale(-1, 1)';
    };
  }
  fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=drive`, {
    method: 'PATCH',
  })
    .then(() => {
      if (car && car instanceof HTMLDivElement) {
        car.getAnimations().forEach((animation) => animation.pause());
      }
    })
    .catch((e) => `${e}`);

  const btnB = document.getElementById('btn-b');
  btnB?.addEventListener('click', () => {
    if (car && car instanceof HTMLDivElement) {
      car.getAnimations().forEach((animation) => animation.pause());
      stopCar(raceStrip);
    }
  });
}
