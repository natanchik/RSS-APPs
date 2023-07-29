import { createRaceStrip } from '../../blocks/race-strip';
import { raceBlock, garageTitle, garagePageTitle, previewPage, nextPage } from '../../blocks/garage';
import { handlerRaceStrip } from '../handler-race-strip';
import { carsInfo } from './drive-car';
import { btnRace } from '../../blocks/command-block';
import { deleteCar } from './delete-car';
import { deleteWinner } from './delete-winner';

const garageInfo = { cars: 0, page: 1 };

function disableNextBtn() {
  if (garageInfo.page === Math.ceil(garageInfo.cars / 7)) {
    nextPage.disabled = true;
  } else if (garageInfo.page < Math.ceil(garageInfo.cars / 7)) {
    nextPage.disabled = false;
  }
}

export async function loadCars() {
  fetch('http://127.0.0.1:3000/garage', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i += 1) {
        carsInfo.set(+result[i].id, { name: result[i].name, color: result[i].color });
      }
    });
}

export async function getCars() {
  fetch(`http://127.0.0.1:3000/garage?_page=${garageInfo.page}&_limit=7`, {
    method: 'GET',
  })
    .then((response) => {
      const counts = response.headers.get('X-Total-Count');
      if (counts) {
        garageInfo.cars = +counts;
      }
      return response.json();
    })
    .then((result) => {
      garageTitle.textContent = `Garage (${garageInfo.cars})`;
      garagePageTitle.textContent = `Page #${garageInfo.page}`;
      raceBlock.innerHTML = '';
      for (let i = 0; i < result.length; i += 1) {
        const newCar = createRaceStrip(result[i].name, result[i].color, result[i].id);
        raceBlock.appendChild(newCar);
        newCar.addEventListener('click', async (event) => {
          handlerRaceStrip(event, newCar);
          const { target } = event;
          if (target && target instanceof HTMLButtonElement) {
            if (target.classList.contains('removeBtn')) {
              deleteCar(newCar).then((res) => {
                if (res.status === 200) {
                  deleteWinner(newCar);
                  carsInfo.delete(+newCar.id);
                  getCars();
                }
              });
            }
          }
        });
      }
      disableNextBtn();
      btnRace.disabled = false;
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}

function goToNextPage() {
  garageInfo.page += 1;
  if (garageInfo.page === 2) {
    previewPage.disabled = false;
  } else if (garageInfo.page === Math.ceil(garageInfo.cars / 7)) {
    nextPage.disabled = true;
  }
  getCars();
}

function goToPrevPage() {
  garageInfo.page -= 1;
  if (garageInfo.page === 1) {
    previewPage.disabled = true;
  } else if (garageInfo.page === Math.ceil(garageInfo.cars / 7) - 1) {
    nextPage.disabled = false;
  }
  getCars();
}

previewPage.addEventListener('click', () => {
  goToPrevPage();
});
nextPage.addEventListener('click', () => {
  goToNextPage();
});
