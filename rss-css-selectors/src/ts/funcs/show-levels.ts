import { levelBlock, menuButton } from '../blocks/levels';

const xShowLevels = { transform: 'translateX(0)' };
const xHideLevels = { transform: 'translateX(200px)' };
const optionsShowLevels = { duration: 2000, iterations: 1 };

function animateLevelBlock() {
  if (menuButton.classList.contains('pushed')) {
    levelBlock.animate([xHideLevels, xShowLevels], optionsShowLevels);
  } else {
    levelBlock.animate([xShowLevels, xHideLevels], optionsShowLevels);
  }
}

export function showLevels() {
  menuButton.classList.toggle('pushed');
  levelBlock.classList.toggle('pushed');
  animateLevelBlock();
}
