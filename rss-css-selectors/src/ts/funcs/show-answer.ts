import { cssInput } from '../blocks/css-editor';
import { rightAnswer } from './change-level';
import { levels } from '../local-storage';

function markLevelHelped() {
  const levelButton = document.getElementById(`level-${levels.active}`);
  if (levelButton && !levels.helped.includes(levels.active)) {
    levelButton.classList.add('helped');
    levels.helped.push(levels.active);
    localStorage.setItem('levels-helped', JSON.stringify(levels.helped));
  }
}

export function showAnswer() {
  cssInput.value = typeof rightAnswer.code === 'string' ? rightAnswer.code : rightAnswer.code[0];
  setTimeout(() => {
    cssInput.value = '';
  }, 1500);
  markLevelHelped()
}
