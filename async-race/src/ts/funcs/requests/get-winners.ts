import {
  winTitle,
  winPageTitle,
  winTableBlock,
  createWinTable,
  pageWinBtnsBlock,
  prevWinPage,
  nextWinPage,
} from '../../blocks/winners';
import { carsInfo } from './drive-car';
import { drawCar } from '../create-elements/draw-car';
import { winners } from './create-winner';

let totalWinners = 0;
let pageWin = 1;

let orderWins = 'ASC';
let orderTime = 'ASC';

export async function loadWinners() {
  fetch('http://127.0.0.1:3000/winners', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i += 1) {
        winners.set(result[i].id, { wins: result[i].wins, time: result[i].time });
      }
    });
}

function disableNextWinBtn() {
  if (pageWin === Math.ceil(totalWinners / 10)) {
    nextWinPage.disabled = true;
  } else if (pageWin < Math.ceil(totalWinners / 10)) {
    nextWinPage.disabled = false;
  }
}

export async function getWinners(sort?: string, order?: string) {
  let url = `http://127.0.0.1:3000/winners?_page=${pageWin}&_limit=10`;
  if (sort) {
    url += `&_sort=${sort}`;
  }
  if (order) {
    url += `&_order=${order}`;
  }
  fetch(url, { method: 'GET' })
    .then((response) => {
      const counts = response.headers.get('X-Total-Count');
      if (counts) {
        totalWinners = +counts;
      }
      return response.json();
    })
    .then((result) => {
      winTitle.textContent = `Winners (${totalWinners})`;
      winPageTitle.textContent = `Page #${pageWin}`;
      winTableBlock.innerHTML = '';
      const winTable = createWinTable();
      winTableBlock.appendChild(winTable);

      const thBtns = winTable.querySelectorAll('.th');

      thBtns[3]?.addEventListener('click', () => {
        orderWins = orderWins === 'ASC' ? 'DESC' : 'ASC';
        getWinners('wins', orderWins);
      });

      thBtns[4]?.addEventListener('click', () => {
        orderTime = orderTime === 'ASC' ? 'DESC' : 'ASC';
        getWinners('time', orderTime);
      });

      const tBody = winTable.createTBody();
      for (let i = 0; i < result.length; i += 1) {
        const carInfo = carsInfo.get(+result[i].id);
        const tItems = [(pageWin - 1) * 10 + i + 1, '', carInfo.name, result[i].wins, result[i].time];
        const row = tBody.insertRow(i);
        for (let j = 0; j < 5; j += 1) {
          const cell = row.insertCell(j);
          cell.classList.add('tb');
          cell.textContent = `${tItems[j]}`;
        }
        const carIcon = drawCar(carInfo.color);
        carIcon.classList.add('car-icon');
        carIcon.style.top = `${175 + 50 * i}px`;
        winTableBlock.appendChild(carIcon);
      }
      winTableBlock.appendChild(pageWinBtnsBlock);
      disableNextWinBtn();
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}

function goToNextWinPage() {
  pageWin += 1;
  if (pageWin === 2) {
    prevWinPage.disabled = false;
  } else if (pageWin === Math.ceil(totalWinners / 10)) {
    nextWinPage.disabled = true;
  }
  getWinners();
}

function goToPrevWinPage() {
  pageWin -= 1;
  if (pageWin === 1) {
    prevWinPage.disabled = true;
  } else if (pageWin === Math.ceil(totalWinners / 10) - 1) {
    nextWinPage.disabled = false;
  }
  getWinners();
}

prevWinPage.addEventListener('click', goToPrevWinPage);

nextWinPage.addEventListener('click', goToNextWinPage);
