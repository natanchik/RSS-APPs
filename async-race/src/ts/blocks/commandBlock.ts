import { markInput, markList } from './marks-input';
import { createColor } from '../funcs/create/create-color';
import { createBtn } from '../funcs/create/create-btn';
import { createCar } from '../funcs/requests/create-car';
import { updateCar } from '../funcs/requests/update-car';
import { startCars } from '../funcs/requests/start-car';
import { driveCar, winner } from '../funcs/requests/drive-car';
import { generateCars } from '../funcs/requests/generate-cars';
import { resetCars } from '../funcs/reset-cars';

export const commandBlock = document.createElement('div');
commandBlock.classList.add('commandBlock');

const commandRow1 = document.createElement('div');
commandRow1.classList.add('commandRow');
commandBlock.appendChild(commandRow1);

commandRow1.appendChild(markInput);
commandRow1.appendChild(markList);

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

const btnUpdate = createBtn('update');
btnUpdate.classList.add('commandItem');
commandRow2.appendChild(btnUpdate);

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

async function driveCars() {
  const cars = document.querySelectorAll('.race-strip');
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    if (car instanceof HTMLDivElement) {
      driveCar(car);
    }
  }
}

async function raceCars() {
  winner.id = 0;
  startCars();
  driveCars();
}

function updateActiveCar() {
  const activeCar = document.querySelector('.active');
  if (activeCar && activeCar instanceof HTMLDivElement) {
    updateCar(activeCar);
  }
}

btnCreate.addEventListener('click', () => {
  createCar(markInput.value, btnColor.value);
});

btnUpdate.addEventListener('click', updateActiveCar);

btnRace.addEventListener('click', raceCars);

btnGenerateCars.addEventListener('click', () => {
  generateCars();
  startCars();
});

btnReset.addEventListener('click', () => {
  resetCars(document);
});
