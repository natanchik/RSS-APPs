export function createColor() {
  const colorBtn = document.createElement('input');
  colorBtn.setAttribute('type', 'color');
  colorBtn.classList.add('colorBtn');
  return colorBtn;
}
