export const carsAmount = { cars: 0 };

export const garageBlock = document.createElement('div');
garageBlock.classList.add('garage-block');

export const garageTitle = document.createElement('h2');
garageTitle.classList.add('garage-title');
garageTitle.textContent = `Garage (${carsAmount.cars})`;
garageBlock.appendChild(garageTitle);

const garagePageTitle = document.createElement('h3');
garagePageTitle.classList.add('garage-page-title');
garagePageTitle.textContent = `Page #1`;
garageBlock.appendChild(garagePageTitle);

export const raceBlock = document.createElement('div');
raceBlock.classList.add('race-block');
garageBlock.appendChild(raceBlock);

export const winAlert = document.createElement('div');
winAlert.classList.add('win-alert');
garageBlock.appendChild(winAlert);
