import { markInput, markList } from './marks-input';
import { createColor } from '../funcs/create-elements/create-color';
import { createBtn } from '../funcs/create-elements/create-btn';

export const commandBlock = document.createElement('div');
commandBlock.classList.add('commandBlock');

const commandRow1 = document.createElement('div');
commandRow1.classList.add('commandRow');
commandBlock.appendChild(commandRow1);

commandRow1.appendChild(markInput);
commandRow1.appendChild(markList);

export const btnColor = createColor();
btnColor.classList.add('commandItem');
commandRow1.appendChild(btnColor);

export const btnCreate = createBtn('create');
btnCreate.classList.add('commandItem');
commandRow1.appendChild(btnCreate);

const commandRow2 = document.createElement('div');
commandRow2.classList.add('commandRow');
commandBlock.appendChild(commandRow2);

const btnInput = document.createElement('input');
btnInput.classList.add('inputBtn');
btnInput.classList.add('commandItem');
commandRow2.appendChild(btnInput);

const btnColor2 = createColor();
btnColor2.classList.add('commandItem');
commandRow2.appendChild(btnColor2);

export const btnUpdate = createBtn('update');
btnUpdate.classList.add('commandItem');
commandRow2.appendChild(btnUpdate);

const commandRow3 = document.createElement('div');
commandRow3.classList.add('commandRow');
commandBlock.appendChild(commandRow3);

export const btnRace = createBtn('race');
btnRace.classList.add('commandItem');
commandRow3.appendChild(btnRace);

export const btnReset = createBtn('reset');
btnReset.classList.add('commandItem');
commandRow3.appendChild(btnReset);

export const btnGenerateCars = createBtn('generate cars');
btnGenerateCars.classList.add('commandItem');
commandRow3.appendChild(btnGenerateCars);
