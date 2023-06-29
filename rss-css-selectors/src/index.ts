import './style.scss';
import { tableHeader, table } from './ts/table';
import { htmlPanel } from './ts/html-viewer';
import { cssPanel, cssInput, cssButton, helpButton } from './ts/css-editor';
import { levelBlock, levelPanel, resetButton } from './ts/levels';
import { footer } from './ts/footer';
import { changeLevel } from './ts/funcs/changeLevel';
import { inputAnswer, showAnswer, resetGame } from './ts/funcs/css-funcs';

let level = 1;

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
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('level-button')) {
      level = +target.id.slice(6);
      changeLevel(level);
    }
  }
});

cssButton.addEventListener('click', () => {
  inputAnswer(level);
});

cssInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    inputAnswer(level);
  }
});

helpButton.addEventListener('click', () => {
  showAnswer(level);
});

resetButton.addEventListener('click', () => {
  resetGame();
});

changeLevel(level);
