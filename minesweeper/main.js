// import './style.css';
let counter = 100;
let timer = 0;

const tablo = document.createElement('div');
tablo.classList.add('tablo');
document.body.appendChild(tablo);

const counterBlock = document.createElement('div');
counterBlock.classList.add('counter');
counterBlock.innerText = counter;
tablo.appendChild(counterBlock);

const startButton = document.createElement('div');
startButton.classList.add('cell');
startButton.classList.add('startButton');
startButton.innerHTML = '<span class="smile"> &#128578; </span>';
tablo.appendChild(startButton);

const timerBlock = document.createElement('div');
timerBlock.classList.add('timer');
timerBlock.innerText = timer;
tablo.appendChild(timerBlock);

const board = document.createElement('div');
board.classList.add('board');
document.body.appendChild(board);

function createRow() {
  const row = document.createElement('div');
  row.classList.add('row');
  return row;
}

for (let i = 0; i < 10; i++) {
  const row = createRow();
  board.appendChild(row);
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', `${i}-${j}`);
    cell.innerText = ' ';
    row.appendChild(cell);
  }
}
