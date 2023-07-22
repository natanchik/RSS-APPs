export const winners = { amount: 0 };

export const winnersBlock = document.createElement('div');
winnersBlock.classList.add('winners-block');

export const winnersTitle = document.createElement('h2');
winnersTitle.classList.add('winners-title');
winnersTitle.textContent = `Winners (${winners.amount})`;
winnersBlock.appendChild(winnersTitle);

const winnersPageTitle = document.createElement('h3');
winnersPageTitle.classList.add('winners-page-title');
winnersPageTitle.textContent = `Page #1`;
winnersBlock.appendChild(winnersPageTitle);

export const winnersTable = document.createElement('table');
winnersTable.classList.add('winners-table');
const tHead = winnersTable.createTHead().insertRow(0);
const tItems = ['№', 'Image of the car', 'Name of the car', 'Wins number', 'Best time in seconds'].reverse();
for (let i = 0; i < 5; i += 1) {
  const tNum = tHead.insertCell(0);
  tNum.classList.add('th');
  tNum.textContent = tItems[i];
}
export const tBody = winnersTable.createTBody();
winnersBlock.appendChild(winnersTable);
