import { levels, createDataInLocStor } from '../local-storage';
import { changeLevel } from './change-level';

function unMarkLevels() {
  const buttonsPassedlevels = document.querySelectorAll('passed');
  for (let i = 0; buttonsPassedlevels.length; i += 1) {
    buttonsPassedlevels[i].classList.remove('passed');
  }
  const buttonsHelpedlevels = document.querySelectorAll('helped');
  for (let i = 0; buttonsHelpedlevels.length; i += 1) {
    buttonsHelpedlevels[i].classList.remove('helped');
  }
}

export function resetGame() {
  levels.passed.length = 0;
  levels.helped.length = 0;
  unMarkLevels();
  createDataInLocStor();
  levels.active = 1;
  changeLevel();
}
