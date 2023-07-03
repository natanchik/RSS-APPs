import './style.scss';
import { tableHeader, table } from './ts/blocks/table';
import { htmlPanel } from './ts/blocks/html-viewer';
import { cssPanel, cssInput, cssButton, helpButton } from './ts/blocks/css-editor';
import { levelBlock, levelPanel, resetButton } from './ts/blocks/levels';
import { footer } from './ts/blocks/footer';
import { changeLevelByClick } from './ts/funcs/change-level';
import { inputAnswer } from './ts/funcs/input-answer';
import { showAnswer } from './ts/funcs/show-answer';
import { startGame } from './ts/funcs/start-game';
import { resetGame } from './ts/funcs/reset-game';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const editor = document.createElement('div');
editor.classList.add('editor');

document.body.appendChild(levelBlock);

wrapper.appendChild(tableHeader);
wrapper.appendChild(table);

wrapper.appendChild(editor);
editor.appendChild(cssPanel);
editor.appendChild(htmlPanel);

wrapper.appendChild(footer);

levelPanel.addEventListener('click', (event: Event) => {
  changeLevelByClick(event);
});

cssButton.addEventListener('click', () => {
  inputAnswer();
});

cssInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    inputAnswer();
  }
});

helpButton.addEventListener('click', () => {
  showAnswer();
});

resetButton.addEventListener('click', () => {
  resetGame();
});

startGame();
