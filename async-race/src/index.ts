import './style.scss';
import { header } from './ts/blocks/header';
import { createCommandBlock } from './ts/blocks/commandBlock';
import { garageBlock } from './ts/blocks/garage';
import { createCar } from './ts/requests/create-car';

document.body.appendChild(header);

document.body.appendChild(createCommandBlock());

document.body.appendChild(garageBlock);

const createBtn = document.querySelector('.createBtn');
createBtn?.addEventListener('click', () => {
  createCar();
});
