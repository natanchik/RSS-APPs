import { commandBlock } from './commandBlock';
import { garageBlock } from './garage';
import { getCars } from '../funcs/requests/get-cars';
import { winBlock, winTitle, winPageTitle, createWinTable } from './winners';
import { getWinners } from '../funcs/requests/get-winners';

const header = document.createElement('div');
header.classList.add('header');
document.body.appendChild(header);

const toGarageBtn = document.createElement('button');
toGarageBtn.classList.add('button');
toGarageBtn.classList.add('toGarageBtn');
toGarageBtn.innerText = 'TO GARAGE';
header.appendChild(toGarageBtn);

const toWinnerBtn = document.createElement('button');
toWinnerBtn.classList.add('button');
toWinnerBtn.classList.add('toWinnerBtn');
toWinnerBtn.innerText = 'TO WINNERS';
header.appendChild(toWinnerBtn);

export function showGarage() {
  document.body.innerHTML = '';
  document.body.appendChild(header);
  document.body.appendChild(commandBlock);
  document.body.appendChild(garageBlock);
  getCars();
}

function showWin() {
  document.body.innerHTML = '';
  document.body.appendChild(header);
  document.body.appendChild(winBlock);
  winBlock.innerHTML = '';
  winBlock.appendChild(winTitle);
  winBlock.appendChild(winPageTitle);
  createWinTable();
  getWinners();
}

toGarageBtn.addEventListener('click', showGarage);

toWinnerBtn.addEventListener('click', showWin);
