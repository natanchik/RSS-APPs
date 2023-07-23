import { createRaceStrip } from '../../blocks/race-strip';
import { raceBlock, carsAmount, garageTitle } from '../../blocks/garage';
import { startCar } from './start-car';

export const carsInfo = new Map();

export async function getCars() {
  fetch('http://127.0.0.1:3000/garage', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      carsAmount.cars = result.length;
      garageTitle.textContent = `Garage (${carsAmount.cars})`;
      raceBlock.innerHTML = '';
      for (let i = 0; i < result.length; i += 1) {
        carsInfo.set(result[i].id, { name: result[i].name, color: result[i].color, wins: 0 });
        const newCar = createRaceStrip(result[i].name, result[i].color, result[i].id);
        raceBlock.appendChild(newCar);
        startCar(newCar);
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
