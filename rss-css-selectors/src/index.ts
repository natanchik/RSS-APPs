import './style.scss';
import { wrapper } from './ts/blocks/wrapper';
import { tableHeader, table } from './ts/blocks/table';
import { htmlPanel } from './ts/blocks/html-viewer';
import { cssPanel, cssInput, cssButton, helpButton } from './ts/blocks/css-editor';
import { levelBlock, levelPanel, resetButton, menuButton } from './ts/blocks/levels';
import { footer } from './ts/blocks/footer';
import { changeLevelByClick } from './ts/funcs/change-level';
import { inputAnswer, inputByEnter } from './ts/funcs/input-answer';
import { showAnswer } from './ts/funcs/show-answer';
import { startGame } from './ts/funcs/start-game';
import { resetGame } from './ts/funcs/reset-game';
import { showLevels } from './ts/funcs/show-levels';

document.body.appendChild(wrapper);

const editor = document.createElement('div');
editor.classList.add('editor');

document.body.appendChild(levelBlock);
wrapper.appendChild(menuButton);

wrapper.appendChild(tableHeader);
wrapper.appendChild(table);

wrapper.appendChild(editor);
editor.appendChild(cssPanel);
editor.appendChild(htmlPanel);

wrapper.appendChild(footer);

levelPanel.addEventListener('click', changeLevelByClick);

cssButton.addEventListener('click', inputAnswer);

cssInput.addEventListener('keydown', inputByEnter);

helpButton.addEventListener('click', showAnswer);

resetButton.addEventListener('click', resetGame);

menuButton.addEventListener('click', showLevels);

startGame();
