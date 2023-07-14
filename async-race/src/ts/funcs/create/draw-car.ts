import { paintCar } from '../../blocks/car-image';

export function drawCar(color: string, id: number) {
  const car = document.createElement('div');
  car.classList.add('race-strip-row-item');
  car.classList.add('car');
  car.setAttribute('id', `car-${id}`);

  const carImg = document.createElement('div');
  carImg.classList.add('car-image');
  carImg.innerHTML = paintCar(color);
  car.appendChild(carImg);

  return car;
}
