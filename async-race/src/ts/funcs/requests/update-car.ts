import { paintCar } from '../create-elements/draw-car';
import { btnInput, btnColor2 } from '../../blocks/command-block';
import { carsInfo } from './drive-car';

export async function updateCar(raceStrip: HTMLDivElement) {
  const data = { name: btnInput.value, color: btnColor2.value };
  fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        const car = raceStrip.querySelector('.car');
        if (car) {
          car.innerHTML = paintCar(btnColor2.value);
        }
        const carName = raceStrip.querySelector('.car-name');
        if (carName && carName instanceof HTMLParagraphElement) {
          carName.innerText = btnInput.value;
        }
        carsInfo.set(+raceStrip.id, { name: btnInput.value, color: btnColor2.value });
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
