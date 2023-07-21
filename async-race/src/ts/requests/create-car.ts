import { createRaceStrip } from '../blocks/race-strip';
import { carsAmount, garageTitle } from '../blocks/garage';

export async function createCar(mark: string, color: string) {    
  const car = { name: color, color: color };
  fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then((response) => response.json())
    .then((result) => {
      document.body.appendChild(createRaceStrip(mark, color, result.id));      
      carsAmount.cars += 1;
      garageTitle.textContent = `Garage (${carsAmount.cars})`;
    })
    .catch((e) => `Something is wrong, error: ${e}`);  
}
