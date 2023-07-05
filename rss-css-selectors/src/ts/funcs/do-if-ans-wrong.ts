export async function doIfAnswerWrong() {
  const editor = document.querySelector('.editor');
  editor?.animate([{ transform: 'translate(3px, 0)' }, { transform: 'translate(-3px, 0)' }], {
    duration: 50,
    iterations: 5,
  });
}
