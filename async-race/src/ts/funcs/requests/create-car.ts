import { carsInfo } from './drive-car';
import { getCars } from './get-cars';

export async function createCar(mark: string, color: string) {
  const car = { name: mark, color };
  fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  })
    .then((response) => response.json())
    .then((result) => {
      carsInfo.set(result.id, { name: result.name, color: result.color });
      getCars();
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
