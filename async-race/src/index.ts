import './style.scss';
import { header } from './ts/blocks/header';
import { createCommandBlock } from './ts/blocks/commandBlock';
import { garageBlock } from './ts/blocks/garage';
import { createRaceStrip } from './ts/blocks/race-strip';

document.body.appendChild(header);

document.body.appendChild(createCommandBlock());

document.body.appendChild(garageBlock);

const createBtn = document.querySelector('.createBtn');
createBtn?.addEventListener('click', () => {
  const colorBtn = document.querySelector('.colorBtn');
  const markInput = document.querySelector('.markInput');
  if (colorBtn && markInput && colorBtn instanceof HTMLInputElement && markInput instanceof HTMLInputElement) {
    document.body.appendChild(createRaceStrip(markInput.value, colorBtn.value));
    markInput.innerText = '';
  }
});
