import { createRaceStrip } from '../blocks/race-strip';

export async function createCar() {
  const colorBtn = document.querySelectorAll('.colorBtn')[0];
  const markInput = document.querySelector('.markInput');
  if (colorBtn && markInput && colorBtn instanceof HTMLInputElement && markInput instanceof HTMLInputElement) {
    const car = { name: markInput.value, color: colorBtn.value };
    fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then((response) => response.json())
      .then((result) => {
        document.body.appendChild(createRaceStrip(markInput.value, colorBtn.value, result.id));
      })
      .catch((e) => `Something is wrong, error: ${e}`);
  }
}
