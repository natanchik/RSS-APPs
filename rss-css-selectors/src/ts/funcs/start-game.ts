import { levels, getActiveLevel, getMarkedLevels } from './local-storage';
import { changeLevel } from './change-level';
import { createGame } from './create-game';

export function markLevels(levelsList: number[], mark: string) {
  levelsList.forEach((level) => {
    const markedLevel = document.getElementById(`level-${level}`);
    if (markedLevel) {
      markedLevel.classList.add(mark);
    }
  });
}

export function start() {
  createGame();
  getActiveLevel();
  getMarkedLevels(levels.passed, 'passed');
  getMarkedLevels(levels.helped, 'helped');
  markLevels(levels.passed, 'passed');
  markLevels(levels.helped, 'helped');
  changeLevel();
}
