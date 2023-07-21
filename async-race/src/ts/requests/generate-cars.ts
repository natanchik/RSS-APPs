import { marks } from '../marks'
import { createCar } from './create-car'

function getRndInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRndColor() {
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += getRndInt(0, 15).toString(16)
  }
  return color;
}

export async function generateCars() {    
  for (let i = 0; i < 10; i += 1) {
    const mark = marks[getRndInt(0, 10)];
    console.log(mark)
    const color = getRndColor();
    console.log(color)
    createCar(mark, color);
  }   
}
