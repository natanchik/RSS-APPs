import { animateRightAnswer } from './animate-right-ans';
import { win } from './win';
import { levels } from '../local-storage';
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

function doIfLevelNotHigherMax() {
  while (levels.passed.includes(levels.active)) {
    levels.active += 1;
  }
  changeLevel();
}

function doIfLevelHigherMax() {
  for (let i = 1; i <= maxLevel; i += 1) {
    if (!levels.passed.includes(i)) {
      levels.active = i;
      changeLevel();
      break;
    }
  }
}

export function doIfAnswerRight() {
  animateRightAnswer();
  updatePassedLevels();
  levels.active += 1;
  if (levels.passed.length === maxLevel) {
    win();
  } else if (levels.active <= maxLevel) {
    doIfLevelNotHigherMax();
  }
  if (levels.active > maxLevel) {
    doIfLevelHigherMax();
  }
}
