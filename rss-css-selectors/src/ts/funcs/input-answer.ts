import { cssInput } from '../blocks/css-editor';
import { maxLevel } from './mark-level';
import { doIfAnswerWrong } from './do-if-ans-wrong';
import { doIfAnswerRight } from './do-if-ans-right';
import { changeLevel, rightAnswers } from './change-level';
import { levels } from './local-storage';

export function isAnswerLevelNumber(answer: string) {
  const ansNumb = parseInt(answer, 10);
  return String(ansNumb) === answer && ansNumb > 0 && ansNumb <= maxLevel;
}

function checkAnswer(answer: string) {
  if (isAnswerLevelNumber(answer)) {
    levels.active = parseInt(answer, 10);
    changeLevel();
  } else if (rightAnswers.items.includes(answer)) {
    doIfAnswerRight();
  } else {
    doIfAnswerWrong();
  }
}

export function inputAnswer() {
  const customAnswer = cssInput.value;
  if (!customAnswer) {
    doIfAnswerWrong();
  } else {
    checkAnswer(customAnswer);
  }
}

export function inputByEnter(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    inputAnswer();
  }
}
