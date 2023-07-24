import { winners } from './create-winner';

export async function deleteWinner(raceStrip: HTMLDivElement) {
  if (winners.has(+raceStrip.id)) {
    fetch(`http://127.0.0.1:3000/winners/${raceStrip.id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          winners.delete(+raceStrip.id);
        }
      })
      .catch((e) => `Something is wrong, error: ${e}`);
  }
}
