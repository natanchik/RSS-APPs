import { carImage } from '../../blocks/car-image';

export function drawCar() {
  const car = document.createElement('div');
  car.classList.add('race-strip-row-item');
  car.classList.add('car');

  const carImg = document.createElement('div');
  carImg.classList.add('car-image');
  carImg.innerHTML = carImage;
  car.appendChild(carImg);

  return car;
}
