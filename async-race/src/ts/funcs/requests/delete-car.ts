export async function deleteCar(raceStrip: HTMLDivElement) {
  return fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
    method: 'DELETE',
  });
}
