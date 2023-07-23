export const velocities = new Map();

export async function startCar(raceStrip: HTMLDivElement) {
  fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=started`, {
    method: 'PATCH',
  })
    .then((response) => response.json())
    .then((result) => {
      velocities.set(raceStrip.id, result.velocity);
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}

export async function startCars() {
  const cars = document.querySelectorAll('.race-strip');
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    if (car instanceof HTMLDivElement) {
      startCar(car);
    }
  }
}
