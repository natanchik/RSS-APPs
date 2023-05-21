let tablo = document.createElement('div');
tablo.classList.add('tablo');

let counterBlock = document.createElement('div');
counterBlock.classList.add('counter');
tablo.appendChild(counterBlock);

let startButton = document.createElement('div');
startButton.classList.add('startButton');
startButton.innerHTML = '<span> &#128578; </span>';
tablo.appendChild(startButton);

const timerBlock = document.createElement('div');
timerBlock.classList.add('timer');
tablo.appendChild(timerBlock);

export { tablo, counterBlock, timerBlock, startButton }