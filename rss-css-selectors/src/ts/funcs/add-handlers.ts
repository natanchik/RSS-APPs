import { cssInput, cssButton, helpButton } from '../blocks/css-editor';
import { levelPanel, resetButton, menuButton } from '../blocks/levels';
import { changeLevelByClick } from '../funcs/change-level';
import { inputAnswer, inputByEnter } from '../funcs/input-answer';
import { showAnswer } from '../funcs/show-answer';
import { resetGame } from '../funcs/reset-game';
import { showLevels } from '../funcs/show-levels';

export function addHandlers() {

  levelPanel.addEventListener('click', changeLevelByClick);

  cssButton.addEventListener('click', inputAnswer);

  cssInput.addEventListener('keydown', inputByEnter);

  helpButton.addEventListener('click', showAnswer);

  resetButton.addEventListener('click', resetGame);

  menuButton.addEventListener('click', showLevels);
  
}