export async function deleteCar(raceStrip: HTMLDivElement) {
  fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.status === 200) {
        raceStrip.remove();
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
