import { showGarage, showWin } from '../funcs/show-page';

export const header = document.createElement('div');
header.classList.add('header');

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

toGarageBtn.addEventListener('click', showGarage);

toWinnerBtn.addEventListener('click', showWin);
