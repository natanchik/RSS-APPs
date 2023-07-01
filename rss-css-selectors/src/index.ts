import './style.scss';
import { tableHeader, table } from './ts/table';
import { htmlPanel } from './ts/html-viewer';
import { cssPanel, cssInput, cssButton, helpButton } from './ts/css-editor';
import { levelBlock, levelPanel, resetButton } from './ts/levels';
import { footer } from './ts/footer';
import { changeLevelByClick } from './ts/funcs/change-level';
import { inputAnswer, showAnswer } from './ts/funcs/css-funcs';
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
