export function resetCars(parent: Document | HTMLDivElement) {
  const cars = parent.querySelectorAll('.car');
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    if (car && car instanceof HTMLDivElement) {
      car.getAnimations().forEach((animation) => animation.cancel());
      car.style.transform = '';
    }
  }
}
