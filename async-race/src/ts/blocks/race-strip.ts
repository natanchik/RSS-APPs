import { createBtn, createBtnAB } from '../funcs/create/create-btn';
import { drawCar } from '../funcs/create/draw-car';
import { drawFlag } from '../funcs/create/draw-flag';
import { selectCar } from '../funcs/select-car';
import { deleteCar } from '../requests/delete-car';
import { driveCar } from '../requests/drive-car';
import { startCar } from '../requests/start-car';

function createRaceStripRowUp(name: string) {
  const raceStripRow = document.createElement('div');
  raceStripRow.classList.add('race-strip-row');

  const btnSelect = createBtn('select');
  btnSelect.classList.add('race-strip-row-item');
  raceStripRow.appendChild(btnSelect);

  const btnRemove = createBtn('remove');
  btnRemove.classList.add('race-strip-row-item');
  raceStripRow.appendChild(btnRemove);

  const carName = document.createElement('p');
  carName.classList.add('race-strip-row-item');
  carName.classList.add('car-name');
  carName.innerText = name;
  raceStripRow.appendChild(carName);

  return raceStripRow;
}

function createRaceStripRowCar(color: string) {
  const raceStripRow = document.createElement('div');
  raceStripRow.classList.add('race-strip-row');

  const abBlock = document.createElement('div');
  abBlock.classList.add('ab-block');
  abBlock.appendChild(createBtnAB('a'));
  abBlock.appendChild(createBtnAB('b'));

  raceStripRow.appendChild(abBlock);
  raceStripRow.appendChild(drawCar(color));
  raceStripRow.appendChild(drawFlag());

  return raceStripRow;
}

function handlerRaceStrip(event: Event, raceStrip: HTMLDivElement) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('selectBtn')) {
      selectCar(raceStrip);
    } else if (target.classList.contains('removeBtn')) {
      deleteCar(raceStrip);
    } else if (target.hasAttribute('id') && target.id === 'btn-a') {
      driveCar(raceStrip);
    }
  }
}

export function createRaceStrip(name: string, color: string, id: number) {
  const raceStrip = document.createElement('div');
  raceStrip.classList.add('race-strip');
  raceStrip.setAttribute('id', `${id}`);

  raceStrip.appendChild(createRaceStripRowUp(name));
  raceStrip.appendChild(createRaceStripRowCar(color));

  startCar(raceStrip);

  raceStrip.addEventListener('click', (event) => {
    handlerRaceStrip(event, raceStrip);
  });

  return raceStrip;
}
