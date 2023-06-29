import { cssInput } from '../css-editor';
import { answerWrong, answerRight, win } from './reactions';
import { changeLevel, rightAnswer } from './changeLevel';

const levelsPassed: number[] = [];
const levelsHelped: number[] = [];
const maxLevel = 10;

function updatelevelsPassed(level: number) {
  levelsPassed.push(level);
  const passedLevelButton = document.getElementById(`level-${level}`);
  passedLevelButton?.classList.add('passed');
}

export function inputAnswer(level: number) {
  const customAnswer = cssInput.value;
  if (!customAnswer) {
    answerWrong();
    return;
  }
  const correctAnswer = rightAnswer.code;
  const customNumber = parseInt(customAnswer, 10);
  if (String(customNumber) === customAnswer && customNumber > 0 && customNumber <= maxLevel) {
    level = customNumber;
    changeLevel(level);
  } else if (
    (typeof correctAnswer === 'string' && customAnswer === correctAnswer) ||
    (correctAnswer instanceof Array && correctAnswer.includes(customAnswer))
  ) {
    answerRight();
    if (!levelsPassed.includes(level)) {
      updatelevelsPassed(level);
      level += 1;
      if (levelsPassed.length === maxLevel) {
        win();
      } else if (level <= maxLevel) {
        changeLevel(level);
      } else {
        for (let i = 1; i <= maxLevel; i += 1) {
          if (!levelsPassed.includes(i)) {
            level = i;
            changeLevel(level);
            break;
          }
        }
      }
    }
  } else {
    answerWrong();
  }
}

export function showAnswer(level: number) {
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
