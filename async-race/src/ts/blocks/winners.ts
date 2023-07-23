export const winBlock = document.createElement('div');
winBlock.classList.add('win-block');

export const winTitle = document.createElement('h2');
winTitle.classList.add('win-title');

export const winPageTitle = document.createElement('h3');
winPageTitle.classList.add('win-page-title');
winPageTitle.textContent = `Page #1`;

export function createWinTable() {
  const winTable = document.createElement('table');
  winTable.classList.add('win-table');
  const tHead = winTable.createTHead().insertRow(0);
  const tItems = ['№', 'Image of the car', 'Name of the car', 'Wins number', 'Best time in seconds'].reverse();
  for (let i = 0; i < 5; i += 1) {
    const tNum = tHead.insertCell(0);
    tNum.classList.add('th');
    tNum.textContent = tItems[i];
  }
  winBlock.appendChild(winTable);
}
