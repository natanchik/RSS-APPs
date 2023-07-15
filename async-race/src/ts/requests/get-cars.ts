import { createRaceStrip } from '../blocks/race-strip';

export async function getCars() {
  fetch('http://127.0.0.1:3000/garage', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => {
      for (let i = 0; i < result.length; i += 1) {
        document.body.appendChild(createRaceStrip(result[i].name, result[i].color, result[i].id));
      }
    })
    .catch((e) => `Something is wrong, error: ${e}`);
}
