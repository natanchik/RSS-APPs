export async function stopCar(raceStrip: HTMLDivElement) {
  return fetch(`http://127.0.0.1:3000/engine?id=${raceStrip.id}&status=stopped`, {
    method: 'PATCH',
  });
}
