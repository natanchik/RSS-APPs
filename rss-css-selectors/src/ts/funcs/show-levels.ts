import { levelBlock, menuButton } from '../blocks/levels';

const xShowLevels = { transform: 'translateX(0)' };
const xHideLevels = { transform: 'translateX(200px)' };
const optionsShowLevels = { duration: 2000, iterations: 1, }

export function showLevels() {
  menuButton.classList.toggle('pushed');
  if (menuButton.classList.contains('pushed')) {
    levelBlock.animate(
      [ xHideLevels, xShowLevels ], 
      optionsShowLevels
    );    
  } else {
    levelBlock.animate(
      [ xShowLevels, xHideLevels ], 
      optionsShowLevels
    );
  }  
  levelBlock.classList.toggle('pushed');
}
