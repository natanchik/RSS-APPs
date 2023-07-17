import { createMarks } from '../funcs/create/create-marks';
import { createColor } from '../funcs/create/create-color';
import { createBtn } from '../funcs/create/create-btn';
import { Marks } from '../marks';
import { createCar } from '../requests/create-car';
import { updateCar } from '../requests/update-car';
import { driveCar } from '../requests/drive-car';

export const commandBlock = document.createElement('div');
commandBlock.classList.add('commandBlock');

const commandRow1 = document.createElement('div');
commandRow1.classList.add('commandRow');
commandBlock.appendChild(commandRow1);

createMarks(commandRow1, Marks);

const btnColor = createColor();
btnColor.classList.add('commandItem');
commandRow1.appendChild(btnColor);

const btnCreate = createBtn('create');
btnCreate.classList.add('commandItem');
commandRow1.appendChild(btnCreate);

btnCreate.addEventListener('click', () => {
  createCar();
});

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

const btnUpdate = createBtn('update');
btnUpdate.classList.add('commandItem');
commandRow2.appendChild(btnUpdate);

btnUpdate.addEventListener('click', () => {
  const activeCar = document.querySelector('.active');
  if (activeCar && activeCar instanceof HTMLDivElement) {
    updateCar(activeCar);
  }
});

const commandRow3 = document.createElement('div');
commandRow3.classList.add('commandRow');
commandBlock.appendChild(commandRow3);

const btnRace = createBtn('race');
btnRace.classList.add('commandItem');
commandRow3.appendChild(btnRace);

btnRace.addEventListener('click', () => {
  const cars = document.querySelectorAll('.race-strip');
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    if (car instanceof HTMLDivElement) {
      driveCar(car);
    }
  }
});

const btnReset = createBtn('reset');
btnReset.classList.add('commandItem');
commandRow3.appendChild(btnReset);

const btnGenerateCars = createBtn('generate cars');
btnGenerateCars.classList.add('commandItem');
commandRow3.appendChild(btnGenerateCars);
