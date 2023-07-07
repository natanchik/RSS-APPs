import { animateRightAnswer } from './animate-right-ans';
import { win } from './win';
import { levels } from './local-storage';
import { changeLevel } from './change-level';

export const maxLevel = 10;

function updatePassedLevels() {
  if (!levels.passed.includes(levels.active)) {
    levels.passed.push(levels.active);
    localStorage.setItem('levels-passed', JSON.stringify(levels.passed));
    const passedLevelButton = document.getElementById(`level-${levels.active}`);
    passedLevelButton?.classList.add('passed');
  }
}

function findUnpassedLevel() {
  while (levels.passed.includes(levels.active)) {
    levels.active += 1;
    if (levels.active > maxLevel) {
      levels.active = 1;
    }
  }
}

export function doIfAnswerRight() {
  animateRightAnswer();
  updatePassedLevels();
  if (levels.passed.length === maxLevel) {
    win();
  } else {
    findUnpassedLevel();
    changeLevel();
  }
}
