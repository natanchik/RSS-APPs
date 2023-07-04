import { levelBlock, menuButton } from '../blocks/levels';

export function showLevels() {
  menuButton.classList.toggle('pushed');
  if (menuButton.classList.contains('pushed')) {
    levelBlock.animate(
      [
        { transform: 'translateX(200px)' }, 
        { transform: 'translateX(0)' }
      ], 
      {
        duration: 2000,
        iterations: 1,
      }
    );    
  } else {
    levelBlock.animate(
      [
        { transform: 'translateX(0)' }, 
        { transform: 'translateX(200px)' }
      ], 
      {
        duration: 2000,
        iterations: 1,
      }
    );
  }  
  levelBlock.classList.toggle('pushed');
}
