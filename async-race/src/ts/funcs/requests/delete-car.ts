import { carsAmount, garageTitle } from '../../blocks/garage';
import { deleteWinner } from './delete-winner';

export async function deleteCar(raceStrip: HTMLDivElement) {
  fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.status === 200) {
        deleteWinner(raceStrip);
        carsAmount.cars -= 1;
        garageTitle.textContent = `Garage (${carsAmount.cars})`;
        raceStrip.remove();
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
