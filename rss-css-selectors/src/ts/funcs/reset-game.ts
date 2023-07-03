import { levels, createDataInLocStor } from '../local-storage';
import { changeLevel } from './change-level';

function unMarkLevels() {
  const buttonsPassedlevels = document.querySelectorAll('.passed');
  console.log('buttonsPassedlevels', buttonsPassedlevels)
  for (let i = 0; i < buttonsPassedlevels.length; i += 1) {
    buttonsPassedlevels[i].classList.remove('passed');
  }
  console.log('buttonsPassedlevels', buttonsPassedlevels)  
  const buttonsHelpedlevels = document.querySelectorAll('.helped');
  console.log('buttonsHelpedlevels', buttonsHelpedlevels)
  for (let i = 0; i < buttonsHelpedlevels.length; i += 1) {
    buttonsHelpedlevels[i].classList.remove('helped');
  }
  console.log('buttonsHelpedlevels', buttonsHelpedlevels)
}

export function resetGame() {  
  unMarkLevels();  
  levels.passed.length = 0;
  levels.helped.length = 0;  
  createDataInLocStor();  
  levels.active = 1;    
  changeLevel();  
}
