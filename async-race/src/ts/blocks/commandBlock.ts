import { createMarks } from '../funcs/create/create-marks';
import { createColor } from '../funcs/create/create-color';
import { createBtn } from '../funcs/create/create-btn';
import { Marks } from '../marks';

export function createCommandBlock() {
  const commandBlock = document.createElement('div');
  commandBlock.classList.add('commandBlock');

  const commandRow1 = document.createElement('div');
  commandRow1.classList.add('commandRow');
  commandBlock.appendChild(commandRow1);

  const marksInput = createMarks(Marks);
  marksInput.classList.add('commandItem');
  commandRow1.appendChild(marksInput);

  const btnColor = createColor();
  btnColor.classList.add('commandItem');
  commandRow1.appendChild(btnColor);

  const btnCreate = createBtn('create');
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

  const BtnUpdate = createBtn('update');
  BtnUpdate.classList.add('commandItem');
  commandRow2.appendChild(BtnUpdate);

  const commandRow3 = document.createElement('div');
  commandRow3.classList.add('commandRow');
  commandBlock.appendChild(commandRow3);

  const btnRace = createBtn('race');
  btnRace.classList.add('commandItem');
  commandRow3.appendChild(btnRace);

  const btnReset = createBtn('reset');
  btnReset.classList.add('commandItem');
  commandRow3.appendChild(btnReset);

  const btnGenerateCars = createBtn('generate cars');
  btnGenerateCars.classList.add('commandItem');
  commandRow3.appendChild(btnGenerateCars);

  return commandBlock;
}

// toGarageBtn.addEventListener('click', () => showGarage)

// toWinnerBtn.addEventListener('click', () => showWinners)
