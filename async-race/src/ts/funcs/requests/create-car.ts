import { createRaceStrip } from '../../blocks/race-strip';
import { raceBlock, carsAmount, garageTitle } from '../../blocks/garage';
import { carsInfo } from './drive-car';

export async function createCar(mark: string, color: string) {
  const car = { name: mark, color };
  fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then((response) => response.json())
    .then((result) => {
      carsInfo.set(result.id, { name: result.name, color: result.color, wins: 0 });
      const newCRaceStrip = createRaceStrip(result.name, result.color, result.id);
      raceBlock.appendChild(newCRaceStrip);
      carsAmount.cars += 1;
      garageTitle.textContent = `Garage (${carsAmount.cars})`;
      return newCRaceStrip;
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
