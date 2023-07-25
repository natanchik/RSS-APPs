import { Winner } from '../../types';

export const winners = new Map();

export async function createWinner(winner: Winner) {
  if (winners.has(winner.id)) {
    const winnerInfo = winners.get(winner.id);
    winnerInfo.wins += 1;
    winnerInfo.time = winnerInfo.time < winner.time ? winnerInfo.time : winner.time;
    const newWinner = { wins: winnerInfo.wins, time: winnerInfo.time };
    fetch(`http://127.0.0.1:3000/winners/${winner.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWinner),
    }).catch((e) => e);
  } else {
    const newWinner = { id: winner.id, wins: 1, time: winner.time };
    winners.set(winner.id, { wins: 1, time: winner.time });
    fetch('http://127.0.0.1:3000/winners', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newWinner),
    })
      .then(() => winners.set(winner.id, { wins: 1, time: winner.time }))
      .catch((e) => e);
  }
}
