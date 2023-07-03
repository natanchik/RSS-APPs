import { cssInput } from '../css-editor';
import { doIfAnswerWrong } from './animate-answer';
import { maxLevel, doIfAnswerRight } from './do-if-ans-right';
import { changeLevel, rightAnswer } from './change-level';
import { levels } from '../local-storage';

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

export function inputAnswer() {
  const customAnswer = cssInput.value;
  if (!customAnswer) {
    doIfAnswerWrong();
    return;
  }
  const customNumber = parseInt(customAnswer, 10);
  if (isAnswerLevelNumber(customAnswer, customNumber)) {
    levels.active = customNumber;
    changeLevel();
  } else if (isAnswerRight(customAnswer)) {
    doIfAnswerRight();
  } else {
    doIfAnswerWrong();
  }
}
