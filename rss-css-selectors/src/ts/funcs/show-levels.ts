import { levelBlock, menuButton } from '../blocks/levels';

export function showLevels() {
  menuButton.classList.toggle('pushed');
  levelBlock.classList.toggle('pushed');
}
