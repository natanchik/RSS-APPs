import { winBlock, winTitle } from '../../blocks/winners';
import { carsInfo } from './drive-car';
import { drawCar } from '../create-elements/draw-car';
import { winners } from './create-winner';

export async function getWinners() {
  fetch('http://127.0.0.1:3000/winners', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i += 1) {
        winners.set(result[i].id, { wins: result[i].wins, time: result[i].time });
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}

export function loadTable() {
  winTitle.textContent = `Winners (${winners.size})`;
  const winTable = winBlock.querySelector('.win-table');
  if (winTable instanceof HTMLTableElement) {
    const tBody = winTable.createTBody();
    let i = 0;
    winners.forEach((value, id) => {
      const carInfo = carsInfo.get(+id);
      const tItems = [i + 1, '', carInfo.name, value.wins, value.time];
      const row = tBody.insertRow(i);
      for (let j = 0; j < 5; j += 1) {
        const cell = row.insertCell(j);
        cell.classList.add('tb');
        cell.textContent = `${tItems[j]}`;
      }
      const carIcon = drawCar(carInfo.color);
      carIcon.classList.add('car-icon');
      carIcon.style.top = `${165 + 40 * i}px`;
      winBlock.appendChild(carIcon);
      i += 1;
    });
  }
}
