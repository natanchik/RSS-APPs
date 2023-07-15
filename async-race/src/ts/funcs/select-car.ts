export function selectCar(raceStrip: HTMLDivElement) {
  const activeCars = document.querySelectorAll('.active');
  if (activeCars) {
    for (let i = 0; i < activeCars.length; i += 1) {
      activeCars[i].classList.remove('active');
    }
  }
  raceStrip.classList.add('active');
}
