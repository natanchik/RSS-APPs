import { carModels } from '../../car-models';
import { createCar } from './create-car';

function getRndInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRndColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += getRndInt(0, 15).toString(16);
  }
  return color;
}

export async function generateCars() {
  for (let i = 0; i < 10; i += 1) {
    const mark = Object.entries(carModels)[getRndInt(0, 10)];
    const model = `${mark[0]} ${mark[1][getRndInt(0, 9)]}`;
    const color = getRndColor();
    createCar(model, color);
  }
}
