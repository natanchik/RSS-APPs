import { btnRace } from '../blocks/command-block';
import { stopCar } from './requests/stop-car';

function disableBtns(block: Document | HTMLDivElement, nameBtn: string, disable: boolean) {
  const btns = block.querySelectorAll(`.${nameBtn}`);
  for (let i = 0; i < btns.length; i += 1) {
    const btn = btns[i];
    if (btn && btn instanceof HTMLButtonElement) {
      btn.disabled = disable;
    }
  }
}

export function resetCars(parent: Document | HTMLDivElement) {
  const cars = parent.querySelectorAll('.car');
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    if (car && car instanceof HTMLDivElement) {
      car.getAnimations().forEach((animation) => animation.cancel());
      car.style.transform = '';
    }
  }

  disableBtns(parent, 'btn-a', false);
  disableBtns(parent, 'btn-b', true);
  btnRace.disabled = false;

  if (parent instanceof HTMLDivElement) {
    stopCar(parent);
  } else {
    const strips = parent.querySelectorAll('.race-strip');
    for (let i = 0; i < strips.length; i += 1) {
      const strip = strips[i];
      if (strip instanceof HTMLDivElement) {
        stopCar(strip);
      }
    }
  }
}
