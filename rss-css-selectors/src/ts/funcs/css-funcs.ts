import { cssInput } from '../css-editor';
import { answerWrong, answerRight, win } from './reactions';
import { changeLevel, rightAnswer } from './change-level';
import { levels } from '../local-storage';

const maxLevel = 10;

function updatelevelsPassed() {  
  levels.passed.push(levels.active);
  localStorage.setItem('levels-passed', JSON.stringify(levels.passed));
  const passedLevelButton = document.getElementById(`level-${levels.active}`);
  passedLevelButton?.classList.add('passed');  
}

export function inputAnswer() {
  const customAnswer = cssInput.value;
  if (!customAnswer) {
    answerWrong();
    return;
  }
  const correctAnswer = rightAnswer.code;
  const customNumber = parseInt(customAnswer, 10);
  if (String(customNumber) === customAnswer && customNumber > 0 && customNumber <= maxLevel) {
    levels.active = customNumber;
    changeLevel();
  } else if (
    (typeof correctAnswer === 'string' && customAnswer === correctAnswer) ||
    (correctAnswer instanceof Array && correctAnswer.includes(customAnswer))
  ) {
    answerRight();
    if (!levels.passed.includes(levels.active)) {
      updatelevelsPassed();
      levels.active += 1;
      if (levels.passed.length === maxLevel) {
        win();
      } else if (levels.active <= maxLevel) {
        changeLevel();
      } else {
        for (let i = 1; i <= maxLevel; i += 1) {
          if (!levels.passed.includes(i)) {
            levels.active = i;
            changeLevel();
            break;
          }
        }
      }
    }
  } else {
    answerWrong();
  }
}

export function showAnswer() {
  cssInput.value = typeof rightAnswer.code === 'string' ? rightAnswer.code : rightAnswer.code[0];
  setTimeout(() => {
    cssInput.value = '';
  }, 1500);
  const levelButton = document.getElementById(`level-${levels.active}`);
  if (levelButton && !levels.helped.includes(levels.active)) {
    levelButton.classList.add('helped');
    levels.helped.push(levels.active);
    localStorage.setItem('levels-helped', JSON.stringify(levels.helped));
  }
}
