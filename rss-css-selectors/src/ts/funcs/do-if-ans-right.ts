import { answerRight, win } from './animate-answer';
import { levels } from '../local-storage';
import { changeLevel } from './change-level';

export const maxLevel = 10;

function updatePassed() {
  levels.passed.push(levels.active);
  localStorage.setItem('levels-passed', JSON.stringify(levels.passed));
  const passedLevelButton = document.getElementById(`level-${levels.active}`);
  passedLevelButton?.classList.add('passed');
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
  answerRight();
  if (!levels.passed.includes(levels.active)) {
    updatePassed();
  }
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
