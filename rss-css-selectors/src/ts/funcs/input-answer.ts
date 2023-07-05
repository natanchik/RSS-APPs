import { cssInput } from '../blocks/css-editor';
import { doIfAnswerWrong } from './do-if-ans-wrong';
import { maxLevel, doIfAnswerRight } from './do-if-ans-right';
import { changeLevel, rightAnswer } from './change-level';
import { levels } from './local-storage';

function isAnswerLevelNumber(answer: string, ansNumb: number) {
  return String(ansNumb) === answer && ansNumb > 0 && ansNumb <= maxLevel;
}

function isAnswerRight(answer: string) {
  const correctAnswer = rightAnswer.code;
  return (
    (typeof correctAnswer === 'string' && answer === correctAnswer) ||
    (correctAnswer instanceof Array && correctAnswer.includes(answer))
  );
}

function checkAnswer(answer: string) {
  const customNumber = parseInt(answer, 10);
  if (isAnswerLevelNumber(answer, customNumber)) {
    levels.active = customNumber;
    changeLevel();
  } else if (isAnswerRight(answer)) {
    doIfAnswerRight();
  } else {
    doIfAnswerWrong();
  }
}

export function inputAnswer() {
  const customAnswer = cssInput.value;
  if (!customAnswer) {
    doIfAnswerWrong();
    return;
  }
  checkAnswer(customAnswer);
}

export function inputByEnter(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    inputAnswer();
  }
}
