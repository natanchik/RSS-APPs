import { animateRightAnswer } from './animate-right-ans';
import { win } from './win';
import { levels } from './local-storage';
import { changeLevel } from './change-level';

export const maxLevel = 10;

function updatePassedLevels() {
  if (!levels.passed.includes(levels.active) && levels.active > 0 && levels.active <= maxLevel) {
    levels.passed.push(levels.active);
    localStorage.setItem('levels-passed', JSON.stringify(levels.passed));
    const passedLevelButton = document.getElementById(`level-${levels.active}`);
    passedLevelButton?.classList.add('passed');
  }
}

export function findUnpassedLevel(levelsList: number[], level: number) {
  let newLevel = level;
  while (levelsList.includes(newLevel)) {
    newLevel += 1;
    if (newLevel > maxLevel) {
      newLevel = 1;
    }
  }
  return newLevel;
}

export function doIfAnswerRight() {
  animateRightAnswer();
  updatePassedLevels();
  if (levels.passed.length === maxLevel) {
    win();
  } else {
    levels.active = findUnpassedLevel(levels.passed, levels.active);
    changeLevel();
  }
}
