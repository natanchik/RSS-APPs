export const header = document.createElement('div');
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

function showGarage() {}

function showWinners() {}

toGarageBtn.addEventListener('click', () => showGarage);

toWinnerBtn.addEventListener('click', () => showWinners);
