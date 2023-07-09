import { levels, getDataFromLocStor } from './local-storage';
import { changeLevel } from './change-level';
import { createGame } from './create-game';

export function markLevels(levelsList: number[], mark: string) {
  if (levelsList) {
    for (let i = 0; i < levelsList.length; i += 1) {
      const markedlevel = document.getElementById(`level-${levelsList[i]}`);
      if (markedlevel) {
        markedlevel.classList.add(mark);
      }
    }
  }
}

function startGame() {
  getDataFromLocStor();
  markLevels(levels.passed, 'passed');
  markLevels(levels.helped, 'helped');
  changeLevel();
}

export function start() {
  createGame();
  startGame();
}
