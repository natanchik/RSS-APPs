import { cssInput } from '../blocks/css-editor';
import { rightAnswers } from './change-level';
import { levels } from './local-storage';
import { markLevel } from './mark-level';

export function help() {
  cssInput.value = rightAnswers.items[0];
  setTimeout(() => {
    cssInput.value = '';
  }, 1500);
  markLevel(levels.helped, levels.active, 'helped');
}
