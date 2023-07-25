export function createBtn(text: string) {
  const btn = document.createElement('button');
  btn.classList.add('button');
  btn.classList.add(`${text}Btn`.replace(' ', '-'));
  btn.innerText = text.toUpperCase();
  return btn;
}

export function createBtnAB(text: string) {
  const btn = document.createElement('button');
  btn.classList.add(`btn-${text}`);
  btn.classList.add('button-ab');
  btn.classList.add('race-strip-row-item');
  btn.innerText = text.toUpperCase();
  if (text === 'b') {
    btn.disabled = true;
  }
  return btn;
}
