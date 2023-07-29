import { selectCar } from './select-car';
import { startCar } from './requests/start-car';
import { resetCars } from './reset-cars';

export async function handlerRaceStrip(event: Event, raceStrip: HTMLDivElement) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('selectBtn')) {
      selectCar(raceStrip);
    } else if (target.classList.contains('btn-a')) {
      startCar(raceStrip);
    } else if (target.classList.contains('btn-b')) {
      resetCars(raceStrip);
    }
  }
}
