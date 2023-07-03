import { levels, createDataInLocStor } from '../local-storage';
import { changeLevel } from './change-level';

function unMarkLevels() {
  const buttonsPassedlevels = document.querySelectorAll('.passed');
  for (let i = 0; i < buttonsPassedlevels.length; i += 1) {
    buttonsPassedlevels[i].classList.remove('passed');
  }  
  const buttonsHelpedlevels = document.querySelectorAll('.helped');  
  for (let i = 0; i < buttonsHelpedlevels.length; i += 1) {
    buttonsHelpedlevels[i].classList.remove('helped');
  }  
}

export function resetGame() {  
  unMarkLevels();  
  levels.passed.length = 0;
  levels.helped.length = 0;  
  createDataInLocStor();  
  levels.active = 1;    
  changeLevel();  
}
