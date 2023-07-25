import { btnColor, btnCreate, btnUpdate, btnRace, btnReset, btnGenerateCars } from '../blocks/command-block';
import { markInput } from '../blocks/marks-input';
import { createCar } from './requests/create-car';
import { updateCar } from './requests/update-car';
import { startCars } from './requests/start-car';
import { winner } from './requests/drive-car';
import { generateCars } from './requests/generate-cars';
import { resetCars } from './reset-cars';

export async function raceCars() {
  btnRace.disabled = true;
  winner.id = 0;
  startCars();
}

async function updateActiveCar() {
  const activeCar = document.querySelector('.active');
  if (activeCar && activeCar instanceof HTMLDivElement) {
    updateCar(activeCar);
  }
}

btnCreate.addEventListener('click', async () => {
  createCar(markInput.value, btnColor.value);
});

btnUpdate.addEventListener('click', updateActiveCar);

btnRace.addEventListener('click', raceCars);

btnGenerateCars.addEventListener('click', generateCars);

btnReset.addEventListener('click', async () => {
  resetCars(document);
});
