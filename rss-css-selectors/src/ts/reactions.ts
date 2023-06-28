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

const congratulations = document.createElement('pre');
congratulations.classList.add('congratulations');
congratulations.innerText = `Congratulations!!!
You are winner!!!`;

export const win = function(table: HTMLDivElement) {
  table.innerHTML = '';
  table.appendChild(congratulations);
  table.animate(
    [
      { background: "repeating-linear-gradient(90deg, #00FF00, #FDE910, #00FF00, #FDE910)" },
      { background: "repeating-linear-gradient(135deg, #FDE910, #00FF00, #FDE910, #00FF00)" },
      { background: "repeating-linear-gradient(270deg, #00FF00, #FDE910, #00FF00, #FDE910)" },
      { background: "repeating-linear-gradient(360deg, #FDE910, #00FF00, #FDE910, #00FF00)" },
    ],
    {
      duration: 2000,
      iterations: Infinity,            
    }
  );
}
