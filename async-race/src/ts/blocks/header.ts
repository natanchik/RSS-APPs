import { showGarage, showWin } from '../funcs/show-page';
import { createBtn } from '../funcs/create-elements/create-btn';

export const header = document.createElement('div');
header.classList.add('header');

const toGarageBtn = createBtn('to garage');
header.appendChild(toGarageBtn);

const toWinnerBtn = createBtn('to winners');
header.appendChild(toWinnerBtn);

toGarageBtn.addEventListener('click', showGarage);

toWinnerBtn.addEventListener('click', showWin);
