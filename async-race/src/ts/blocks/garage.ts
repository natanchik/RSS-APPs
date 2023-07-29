import { createBtn } from '../funcs/create-elements/create-btn';

export const garageBlock = document.createElement('div');
garageBlock.classList.add('garage-block');

export const garageTitle = document.createElement('h2');
garageTitle.classList.add('garage-title');
garageBlock.appendChild(garageTitle);

export const garagePageTitle = document.createElement('h3');
garagePageTitle.classList.add('garage-page-title');
garagePageTitle.classList.add('page-title');
garageBlock.appendChild(garagePageTitle);

export const raceBlock = document.createElement('div');
raceBlock.classList.add('race-block');
garageBlock.appendChild(raceBlock);

export const winAlert = document.createElement('div');
winAlert.classList.add('win-alert');
garageBlock.appendChild(winAlert);

const pageBtnsBlock = document.createElement('div');
pageBtnsBlock.classList.add('page-btns-block');
garageBlock.appendChild(pageBtnsBlock);

export const previewPage = createBtn('preview');
pageBtnsBlock.appendChild(previewPage);
previewPage.disabled = true;

export const nextPage = createBtn('next');
pageBtnsBlock.appendChild(nextPage);
