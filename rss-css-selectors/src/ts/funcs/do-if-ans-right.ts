import { animateRightAnswer } from './animate-right-ans';
import { win } from './win';
import { levels } from './local-storage';
import { changeLevel } from './change-level';
import { markLevel, maxLevel } from './mark-level';

export function findUnpassedLevel(levelsList: number[], level: number) {
  let newLevel = level;
  while (levelsList.includes(newLevel)) {
    newLevel = newLevel === maxLevel ? 1 : newLevel + 1;
  }
  return newLevel;
}

export function doIfAnswerRight() {
  animateRightAnswer();
  markLevel(levels.passed, levels.active, 'passed');
  if (levels.passed.length === maxLevel) {
    win();
  } else {
    levels.active = findUnpassedLevel(levels.passed, levels.active);
    changeLevel();
  }
}
