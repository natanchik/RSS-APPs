import './style.scss';
import { tableHeader, table, congratulations } from './ts/table';
import { htmlPanel } from './ts/html-viewer';
import { cssPanel, cssInput, cssButton, helpButton } from './ts/css-editor';
import { levelBlock, levelPanel } from './ts/levels';
import { footer } from './ts/footer';
import { changeLevel, cssAnswer } from './ts/changeLevel';
import { answerWrong, answerRight } from './ts/reactions';

export let level = 1;
const maxLevel = 10;
export const levelsPassed = new Map();

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

function updatelevelsPassed() {
  levelsPassed.set(level, 'passed');
  const passedLevelButton = document.getElementById(`level-${level}`);
  passedLevelButton?.classList.add('passed');
}

function win() {
  table.innerHTML = '';
  table.appendChild(congratulations);
  table.animate(
    [
      { background: 'repeating-linear-gradient(45deg, #00FF00, #FDE910, #00FF00, #FDE910)' },
      { background: 'repeating-linear-gradient(135deg, #FDE910, #00FF00, #FDE910, #00FF00)' },
      { background: 'repeating-linear-gradient(225deg, #00FF00, #FDE910, #00FF00, #FDE910)' },
      { background: 'repeating-linear-gradient(315deg, #FDE910, #00FF00, #FDE910, #00FF00)' },
    ],
    {
      duration: 2000,
      iterations: Infinity,
    },
  );
}

function inputAnswer() {
  const customAnswer = cssInput.value;
  if (
    String(parseInt(customAnswer, 10)) === customAnswer &&
    parseInt(customAnswer, 10) > 0 &&
    parseInt(customAnswer, 10) <= maxLevel
  ) {
    level = parseInt(customAnswer, 10);
    changeLevel(level);
  } else if (customAnswer === cssAnswer || cssAnswer.includes(customAnswer)) {
    answerRight();
    if (![...levelsPassed.keys()].includes(level)) {
      updatelevelsPassed();
      level += 1;
      if (levelsPassed.size === maxLevel) {
        win();
      } else if (level <= maxLevel) {
        changeLevel(level);
      } else {
        for (let i = 1; i <= maxLevel; i += 1) {
          if (![...levelsPassed.keys()].includes(i)) {
            level = i;
            changeLevel(level);
            break;
          }
        }
      }
    }
  } else {
    answerWrong(editor);
  }
}

cssButton.addEventListener('click', () => {
  inputAnswer();
});

cssInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    inputAnswer();
  }
});

async function showAnswer() {
  cssInput.style.transition = "all 2s";
  const ans = typeof cssAnswer === 'string' ? cssAnswer : cssAnswer[0];  
  cssInput.value = ans;  
  // for (let i = 0; i < ans.length; i += 1) {
  //   setTimeout(() => {
  //     cssInput.value += ans[i];       
  //   }, 1500)
  // }  
  setTimeout(() => {
    cssInput.value = '';
  }, 1500)  
}

helpButton.addEventListener('click', () => {
  showAnswer();
});

changeLevel(level);
