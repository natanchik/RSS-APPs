import './style.scss';
import { tableHeader, table, napkin, book, cat, napkinAnim, bookAnim, catAnim, bookGreen, bookGreenAnim } from './ts/table';
import { htmlPanel, htmlNumColumn, htmlText } from './ts/html-viewer';
import { cssPanel, cssNumColumn, cssInput, cssButton } from './ts/css-editor';
import { levelBlock, levelHeader, levelPanel } from './ts/levels';
import { footer } from './ts/footer';
import { changeLevel } from './ts/functions';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

const editor = document.createElement('div');
editor.classList.add('editor');

let numbers = '';
for (let i = 1; i < 11; i += 1) { numbers += `${i}\n`; };

export let level = '1';

document.body.appendChild(levelBlock);

wrapper.appendChild(tableHeader);
wrapper.appendChild(table);
wrapper.appendChild(editor);

editor.appendChild(cssPanel);
editor.appendChild(htmlPanel);

cssNumColumn.innerText = numbers.slice(0, -1);
htmlNumColumn.innerText = numbers.slice(0, -1);

wrapper.appendChild(footer);

levelPanel.addEventListener('click', function(event: Event) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('level-button')) {  
      level = target.id.slice(6);
      changeLevel(level);
    }  
  }
})

changeLevel(level)