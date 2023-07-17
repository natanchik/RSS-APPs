import { velocities } from './start-car';

export function driveCar(raceStrip: HTMLDivElement) {
  const car = raceStrip.querySelector('.car');
  const dur = 500000 / velocities.get(raceStrip.id);
  if (car) {
    car.animate([{ transform: 'translateX(calc(100vw - 250px)) scale(-1, 1)' }], { duration: dur, iterations: 1 });
    car.setAttribute('transform', 'translateX(calc(100vw - 250px))');
  }
  fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=drive`, {
    method: 'PATCH',
  })
    .then((response) => {
      if (response.status === 500) {
        car?.setAttribute('animationPlayState', 'paused');
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
