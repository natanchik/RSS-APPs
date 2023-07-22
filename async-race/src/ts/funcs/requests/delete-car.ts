import { carsAmount, garageTitle } from '../../blocks/garage';

export async function deleteCar(raceStrip: HTMLDivElement) {
  fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.status === 200) {
        raceStrip.remove();
        carsAmount.cars -= 1;
        garageTitle.textContent = `Garage (${carsAmount.cars})`;
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
