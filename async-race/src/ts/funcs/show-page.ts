import { commandBlock, btnRace } from '../blocks/command-block';
import { garageBlock } from '../blocks/garage';
import { getCars, loadCars } from './requests/get-cars';
import { winBlock } from '../blocks/winners';
import { getWinners, loadWinners } from './requests/get-winners';

export const wrapper = document.createElement('div');

export async function loadGarage() {
  wrapper.innerHTML = '';
  wrapper.appendChild(commandBlock);
  wrapper.appendChild(garageBlock);
  getCars();
  loadCars();
  loadWinners();
  btnRace.disabled = false;
}

export async function showGarage() {
  wrapper.innerHTML = '';
  wrapper.appendChild(commandBlock);
  wrapper.appendChild(garageBlock);
}

export async function showWin() {
  wrapper.innerHTML = '';
  wrapper.appendChild(winBlock);
  getWinners();
}
