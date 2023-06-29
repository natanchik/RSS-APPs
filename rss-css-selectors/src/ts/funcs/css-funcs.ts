import { cssInput } from '../css-editor';
import { answerWrong, answerRight, win } from './reactions';
import { levels, changeLevel, rightAnswer } from './changeLevel';

let level = levels.active;
const levelsPassed: number[] = levels.passed;
const levelsHelped: number[] = levels.helped;
const maxLevel = 10;

function updatelevelsPassed() {
  levelsPassed.push(level);
  const passedLevelButton = document.getElementById(`level-${level}`);
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
    level = customNumber;
    changeLevel();
  } else if (
    (typeof correctAnswer === 'string' && customAnswer === correctAnswer) ||
    (correctAnswer instanceof Array && correctAnswer.includes(customAnswer))
  ) {
    answerRight();
    if (!levelsPassed.includes(level)) {
      updatelevelsPassed();
      level += 1;
      if (levelsPassed.length === maxLevel) {
        win();
      } else if (level <= maxLevel) {
        changeLevel();
      } else {
        for (let i = 1; i <= maxLevel; i += 1) {
          if (!levelsPassed.includes(i)) {
            level = i;
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
  const levelButton = document.getElementById(`level-${level}`);
  if (levelButton && levelButton instanceof HTMLButtonElement) {
    levelButton.classList.add('helped');
    levelsHelped.push(level);
  }
}

export function resetGame() {
  levelsPassed.length = 0;
  levelsHelped.length = 0;
  location.reload();
}
