import { flagImage } from '../../blocks/flag-image';

export function drawFlag() {
  const flag = document.createElement('div');
  flag.classList.add('race-strip-row-item');
  flag.classList.add('flag');
  flag.innerHTML = flagImage;
  return flag;
}
