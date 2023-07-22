import { paintCar } from '../create/paint-car';

export async function updateCar(raceStrip: HTMLDivElement) {
  const colorBtn = document.querySelectorAll('.colorBtn')[1];
  const markInput = document.querySelector('.inputBtn');
  if (colorBtn && markInput && colorBtn instanceof HTMLInputElement && markInput instanceof HTMLInputElement) {
    const data = { name: markInput.value, color: colorBtn.value };
    fetch(`http://127.0.0.1:3000/garage/${raceStrip.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          const carImg = raceStrip.querySelector('.car-image');
          if (carImg) {
            carImg.innerHTML = paintCar(colorBtn.value);
          }
          const carName = raceStrip.querySelector('.car-name');
          if (carName && carName instanceof HTMLParagraphElement) {
            carName.innerText = markInput.value;
          }
        }
      })
      .catch((e) => `Something is wrong, error: ${e}`);
  }
}
