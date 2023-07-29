import { createBtn } from '../funcs/create-elements/create-btn';

export const winBlock = document.createElement('div');
winBlock.classList.add('win-block');

export const winTitle = document.createElement('h2');
winTitle.classList.add('win-title');
winBlock.appendChild(winTitle);

export const winPageTitle = document.createElement('h3');
winPageTitle.classList.add('win-page-title');
winPageTitle.classList.add('page-title');
winBlock.appendChild(winPageTitle);

export const winTableBlock = document.createElement('div');
winTableBlock.classList.add('win-table-block');
winBlock.appendChild(winTableBlock);

export function createWinTable() {
  const winTable = document.createElement('table');
  winTable.classList.add('win-table');

  const tHead = winTable.createTHead().insertRow(0);
  const tItems = ['№', 'Image of the car', 'Name of the car', 'Wins number < >', 'Best time in seconds < >'].reverse();
  for (let i = 0; i < 5; i += 1) {
    const tNum = tHead.insertCell(0);
    tNum.classList.add('th');
    tNum.textContent = tItems[i];
  }
  return winTable;
}

export const pageWinBtnsBlock = document.createElement('div');
pageWinBtnsBlock.classList.add('page-btns-block');

export const prevWinPage = createBtn('preview');
pageWinBtnsBlock.appendChild(prevWinPage);
prevWinPage.disabled = true;

export const nextWinPage = createBtn('next');
pageWinBtnsBlock.appendChild(nextWinPage);
