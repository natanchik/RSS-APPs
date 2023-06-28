import './style.scss';
import { tableHeader, table } from './ts/table';
import { htmlPanel, htmlText } from './ts/html-viewer';
import { cssPanel, cssInput, cssButton } from './ts/css-editor';
import { levelBlock, levelPanel } from './ts/levels';
import { footer } from './ts/footer';
import { changeLevel, cssAnswer,  } from './ts/changeLevel';
import { answerWrong, answerRight, win } from './ts/reactions';

export let level = 1;
const maxLevel = 10;
export let levelsPassed = new Map();

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

levelPanel.addEventListener('click', function(event: Event) {
  const { target } = event;
  if (target && target instanceof HTMLButtonElement) {
    if (target.classList.contains('level-button')) {  
      level = +target.id.slice(6);
      changeLevel(level);
    }  
  }
})

const updatelevelsPassed = function() {
  levelsPassed.set(level, 'passed');
  const passedLevelButton = document.getElementById(`level-${level}`);
  passedLevelButton?.classList.add('passed');
}

cssButton.addEventListener('click', function() {
  const customAnswer = cssInput.value;
  if (String(parseInt(customAnswer, 10)) === customAnswer && parseInt(customAnswer, 10) > 0 && 
      parseInt(customAnswer, 10) <= maxLevel) {
    level = parseInt(customAnswer, 10);
    changeLevel(level);     
  } else if (typeof customAnswer === 'string' && 
      (customAnswer === cssAnswer || cssAnswer.includes(customAnswer))) {
    answerRight();    
    if (![...levelsPassed.keys()].includes(level)) {
      updatelevelsPassed()
      level += 1;
      if (level === maxLevel + 1 && levelsPassed.size === maxLevel) {
        win(table);
      } else {
        if (level <= maxLevel) {
          changeLevel(level);
        } else {
          for (let i = 1; i <= maxLevel; i++) {
            if (![...levelsPassed.keys()].includes(i)) {
              level = i;
              changeLevel(level);
              break;
            }
          }        
        }     
      }      
    }      
  } else {
    answerWrong(editor);
  }
})

changeLevel(level)
