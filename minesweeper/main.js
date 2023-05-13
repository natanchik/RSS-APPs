// import './style.css';
import { tablo } from './js/tablo.js';
import { boardWidth, boardHeight, createBoard } from './js/createBoard.js';
import { totalMineAmount, mine, calcMinesAround, mineList } from './js/startGame.js';;

let counter = 0;
let timer = 0;

let counterBlock = document.createElement('div');
counterBlock.classList.add('counter');
counterBlock.innerText = counter;
tablo.appendChild(counterBlock);

let startButton = document.createElement('div');
startButton.classList.add('startButton');
startButton.innerHTML = '<span class="smile"> &#128578; </span>';
tablo.appendChild(startButton);

const timerBlock = document.createElement('div');
timerBlock.classList.add('timer');
timerBlock.innerText = timer;
tablo.appendChild(timerBlock);

let timerUp;

function deleteBoard() {
  let board = document.getElementById('board');
  if (board) {       
    let cells = board.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) { cells[i].remove() }  
    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) { rows[i].remove() }
    board.remove(); 
  }
}

function mouseDown(event) {
  const { target } = event;
  if (target.classList.contains('cell')) {  
    if (!target.classList.contains('opened')) {
      counter++; 
      counterBlock.innerText = counter;
      target.classList.add('opened');      
    }      
    if (target.classList.contains('mined')) {
      alert('You lose');
      clearInterval(timerUp);   
      let minedCells = document.querySelectorAll('.mined');  
      for (let i = 0; i < minedCells.length; i++) {
        minedCells[i].classList.add('other');        
      }
      board.onmousedown = () => {};                      
    }
  }
}

function game() {   
  deleteBoard();
  createBoard(boardWidth, boardHeight);
  mine(totalMineAmount);
  calcMinesAround(mineList, boardWidth, boardHeight);
  counter = 0;
  timer = 0;
  timerUp = setInterval(() => timerBlock.innerText = timer++, 1000);
  let board = document.getElementById('board');
  board.onmousedown = function (event) { mouseDown(event); };
}

startButton.onmousedown = () => game();

game(boardWidth, boardHeight);