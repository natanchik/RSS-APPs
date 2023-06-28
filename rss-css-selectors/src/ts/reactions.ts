export  const answerWrong = async function(editor: HTMLDivElement) {
  editor.animate(
  [
    { transform: "translate(3px, 0)" },   
    { transform: "translate(-3px, 0)"}
  ],
  {
    duration: 50,
    iterations: 5,
  });
}

export const answerRight = function() {
  alert('You are right!');
}

export const win = function() {
  alert('Victory');
}
