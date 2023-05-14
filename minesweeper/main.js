// import './style.css';
import { tablo } from './js/tablo.js';
import { boardWidth, boardHeight, createBoard } from './js/createBoard.js';
import { totalMineAmount, mine, getCellsAround, calcMinesAround, mineList } from './js/startGame.js';;

const instruction = document.createElement('h1');
instruction.classList.add('h1');
instruction.innerHTML = '<p>To restart the game push the button &#128578;</p>';
document.body.appendChild(instruction);

const board = document.createElement('div');
board.classList.add('board');
board.setAttribute('id', 'board'); 
document.body.appendChild(board); 

let counter = 0;
let timer = 0;

board.appendChild(tablo);

let counterBlock = document.createElement('div');
counterBlock.classList.add('counter');
counterBlock.innerText = counter;
tablo.appendChild(counterBlock);

let startButton = document.createElement('div');
startButton.classList.add('startButton');
startButton.innerHTML = '<span> &#128578; </span>';
tablo.appendChild(startButton);

const timerBlock = document.createElement('div');
timerBlock.classList.add('timer');
timerBlock.innerText = timer;
tablo.appendChild(timerBlock);

let timerUp;

function deleteBoard() {  
  let rows = document.querySelectorAll('.row');
  if (rows) {
    let cells = board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) { cells[i].remove() } 
    for (let i = 0; i < rows.length; i++) { rows[i].remove() }
  }   
}

function stopGame() {
  clearInterval(timerUp);   
  let minedCells = document.querySelectorAll('.mined');  
  for (let i = 0; i < minedCells.length; i++) {
    minedCells[i].classList.add('other');        
  }
  board.onmousedown = () => {};  
}

function openEmpty(cell) {
  let idCell = cell.id.split('-');
  let i = +idCell[0];
  let j = +idCell[1];  
  let idCellsAround = getCellsAround(i, j);   
  for (let el of idCellsAround) {
    let row = el.split('-')[0];
    let col = el.split('-')[1]; 
    if (el.includes('--') || el.startsWith('-') || +row >= boardHeight || +col >= boardWidth ) {
      continue;
    }
    let cellAround = document.getElementById(`${el}`);
    if (!cellAround.classList.contains('opened')) {  
      cellAround.classList.add('opened');
      if (cellAround.classList.contains('empty')) {        
      openEmpty(cellAround);
      }
    }   
  };   
}

function mouseDown(event) {
  const { target } = event;
  if (target.classList.contains('cell')) {  
    if (!target.classList.contains('opened')) {
      counter++; 
      counterBlock.innerText = counter;
      target.classList.add('opened');
      if (target.classList.contains('empty')) {
        openEmpty(target);
      }
      if (counter === boardWidth * boardHeight - totalMineAmount) {
        stopGame();
        startButton.innerHTML = '<span> &#129321; </span>';
        alert(`Hooray! You found all mines in ${timer} seconds and ${counter} moves!`);          
      } 
      if (target.classList.contains('mined')) {      
      stopGame();
      startButton.innerHTML = '<span> &#128565; </span>';
      alert('Game over. Try again');                    
      }    
    }   
  }
}

function game() {   
  deleteBoard();  
  createBoard(boardWidth, boardHeight);
  mine(totalMineAmount);
  calcMinesAround(mineList, boardWidth, boardHeight);   
  timerUp = setInterval(() => timerBlock.innerText = timer++, 1000);
  let board = document.getElementById('board');
  board.onmousedown = function (event) { mouseDown(event); };
}

startButton.onmousedown = () => {
  startButton.innerHTML = '<span> &#128578; </span>';
  counter = 0;
  counterBlock.innerText = counter;
  timer = 0;
  timerBlock.innerText = timer;
  game();
}

game(boardWidth, boardHeight);
