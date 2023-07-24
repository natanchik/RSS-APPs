import { selectCar } from './select-car';
import { deleteCar } from './requests/delete-car';
import { driveCar } from './requests/drive-car';
import { startCar } from './requests/start-car';
import { deleteWinner } from './requests/delete-winner';
import { resetCars } from './reset-cars';

export async function handlerRaceStrip(event: Event, raceStrip: HTMLDivElement) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('selectBtn')) {
      selectCar(raceStrip);
    } else if (target.classList.contains('removeBtn')) {
      deleteWinner(raceStrip);
      deleteCar(raceStrip);
    } else if (target.hasAttribute('id') && target.id === 'btn-a') {
      await startCar(raceStrip);
      await driveCar(raceStrip);
    } else if (target.hasAttribute('id') && target.id === 'btn-b') {
      resetCars(raceStrip);
    }
  }
}
