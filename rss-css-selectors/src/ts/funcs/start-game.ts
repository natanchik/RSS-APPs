import { levels, createDataInLocStor, getDataFromLocStor } from '../local-storage';
import { changeLevel } from './change-level';

function markLevels() {
  if (levels.passed) {
    for (let i = 0; levels.passed.length; i += 1) {
      const passedlevelButton = document.getElementById(`level-${levels.passed[i]}`);
      if (passedlevelButton) {
        passedlevelButton.classList.add('passed');
      }
    }
  }
  if (levels.helped) {
    for (let i = 0; levels.helped.length; i += 1) {
      const helpedlevelButton = document.getElementById(`level-${levels.passed[i]}`);
      if (helpedlevelButton) {
        helpedlevelButton.classList.add('helped');
      }
    }
  }
}

export function startGame() {
  if (localStorage.length === 0) {
    createDataInLocStor();
  }
  getDataFromLocStor();
  markLevels();
  changeLevel();
}
