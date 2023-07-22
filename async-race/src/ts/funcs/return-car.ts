export function returnCars() {
  const cars = document.querySelectorAll('.car');
  cars.forEach((car) => {
    if (car && car instanceof HTMLDivElement) {
      car.style.left = '';
    }
  });
}

export function returnCar(parent: HTMLDivElement) {
  const car = parent.querySelector('.car');
  if (car && car instanceof HTMLDivElement) {
    car.style.left = '';
  }
}
