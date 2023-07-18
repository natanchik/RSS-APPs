import { wrapper } from '../blocks/wrapper';

const textBlock = document.createElement('div');
textBlock.classList.add('textBlock');

const textYouAreRight = document.createElement('pre');
textYouAreRight.classList.add('textYouAreRight');
textYouAreRight.textContent = 'You are right!\nNext Level';
textBlock.appendChild(textYouAreRight);

export async function animateRightAnswer() {
  wrapper.appendChild(textBlock);
  setTimeout(() => {
    wrapper.removeChild(textBlock);
  }, 500);
}
