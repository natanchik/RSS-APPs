import { table, congratulations } from '../table';

export async function doIfAnswerWrong() {
  const editor = document.querySelector('.editor');
  editor?.animate([{ transform: 'translate(3px, 0)' }, { transform: 'translate(-3px, 0)' }], {
    duration: 50,
    iterations: 5,
  });
}

export async function answerRight() {
  const wrapper = document.body.querySelector('.wrapper');
  const textBlock = document.createElement('div');
  textBlock.classList.add('textBlock');
  const textYouAreRight = document.createElement('pre');
  textYouAreRight.classList.add('textYouAreRight');
  textYouAreRight.innerText = `You are right!
  Next Level`;
  textBlock.appendChild(textYouAreRight);
  wrapper?.appendChild(textBlock);
  setTimeout(() => {
    wrapper?.removeChild(textBlock);
  }, 500);
}

export function win() {
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
