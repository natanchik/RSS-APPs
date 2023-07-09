import { cssInput, cssButton, helpButton } from '../blocks/css-editor';
import { levelPanel, resetButton, menuButton } from '../blocks/levels';
import { changeLevelByClick } from './change-level';
import { inputAnswer, inputByEnter } from './input-answer';
import { showAnswer } from './show-answer';
import { resetGame } from './reset-game';
import { showLevels } from './show-levels';

export function addHandlers() {
  levelPanel.addEventListener('click', changeLevelByClick);

  cssButton.addEventListener('click', inputAnswer);

  cssInput.addEventListener('keydown', inputByEnter);

  helpButton.addEventListener('click', showAnswer);

  resetButton.addEventListener('click', resetGame);

  menuButton.addEventListener('click', showLevels);
}
