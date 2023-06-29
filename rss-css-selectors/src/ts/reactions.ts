export async function answerWrong(editor: HTMLDivElement) {
  editor.animate([{ transform: 'translate(3px, 0)' }, { transform: 'translate(-3px, 0)' }], {
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
  }, 1000);
}

