import { levels } from './local-storage';
import { changeLevel } from './change-level';

export function unMarkLevels(mark: string) {
  const buttonsPassedlevels = document.querySelectorAll(`.${mark}`);
  for (let i = 0; i < buttonsPassedlevels.length; i += 1) {
    buttonsPassedlevels[i].classList.remove(mark);
  }
}

export function resetGame() {
  unMarkLevels('passed');
  unMarkLevels('helped');
  levels.passed.length = 0;
  levels.helped.length = 0;
  localStorage.clear();
  levels.active = 1;
  changeLevel();
}
