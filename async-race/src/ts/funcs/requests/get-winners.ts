import { winners, winnersBlock, winnersTitle, tBody } from '../../blocks/winners';
import { carsInfo } from './get-cars';
import { drawCar } from '../create/draw-car';

export async function getWinners() {
  fetch('http://127.0.0.1:3000/winners', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      tBody.innerHTML = '';
      winners.amount = result.length;
      winnersTitle.textContent = `Winners (${winners.amount})`;
      for (let i = 0; i < result.length; i += 1) {
        const carInfo = carsInfo.get(result[i].id);
        const tItems = [i + 1, '', carInfo.name, result[i].wins, result[i].time];
        const row = tBody.insertRow(i);
        for (let j = 0; j < 5; j += 1) {
          const cell = row.insertCell(j);
          cell.classList.add('tb');
          cell.textContent = `${tItems[j]}`;
        }
        const carIcon = drawCar(carInfo.color);
        carIcon.classList.add('car-icon');
        carIcon.style.top = `${160 + 40 * i}px`;
        winnersBlock.appendChild(carIcon);
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
