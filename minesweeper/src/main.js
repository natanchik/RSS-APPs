import './style.css';
import { tablo, counterBlock, timerBlock, startButton } from './js/tablo.js';
import { levelBlock, submitButton } from './js/levelBlock.js';
import { menu } from './js/menu.js';
import { board, createBoard } from './js/createBoard.js';
import { getCellsAround, mine, calcMinesAround, mineList } from './js/startGame.js';

let boardWidth = 10; 
let boardHeight = 10;
let totalMineAmount = 10;

document.body.appendChild(menu);

const instruction = document.createElement('h1');
instruction.classList.add('h1');
instruction.innerHTML = '<p>To restart the game push the button &#128578;</p>';
document.body.appendChild(instruction);

const mainBlock = document.createElement('div');
mainBlock.classList.add('mainBlock');
document.body.appendChild(mainBlock);
mainBlock.appendChild(levelBlock);

let counter = 0;
let timer = 0;
let timerUp;
mainBlock.appendChild(board); 
board.appendChild(tablo);
counterBlock.innerText = counter;
timerBlock.innerText = timer;

const lastGames = document.createElement('div');
lastGames.classList.add('lastGames');
lastGames.setAttribute('id', 'lastGames'); 
lastGames.innerHTML = '<p>Last games:</p>';
mainBlock.appendChild(lastGames);

function prepareToGame() {
  startButton.innerHTML = '<span> &#128578; </span>';
  counter = 0;
  counterBlock.innerText = counter;
  timer = 0;
  timerBlock.innerText = timer;
}

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
  }
}

function win() {
  let openedCells = document.querySelectorAll('.opened');
  if (openedCells.length === boardWidth * boardHeight - totalMineAmount) {
    stopGame();
    startButton.innerHTML = '<span> &#129321; </span>';
    alert(`Hooray! You found all mines in ${timer} seconds and ${counter} moves!`);          
  } 
}

function lose(target) {
  if (target.classList.contains('mined')) {      
    stopGame();
    startButton.innerHTML = '<span> &#128565; </span>';
    alert('Game over. Try again');                    
  } 
}

function startGame(event, minesAmount, width, height) {
  const { target } = event;
  counter++; 
  counterBlock.innerText = counter;
  target.classList.add('opened');
  mine(minesAmount, width, height);
  calcMinesAround(mineList, width, height);
  if (target.classList.contains('empty')) {
    openEmpty(target);
  }
  win();
}

function mouseDown(event) {
  const { target } = event;
  if (target.classList.contains('cell')) {  
    if (event.button === 0 && !target.classList.contains('opened')) {
      counter++; 
      counterBlock.innerText = counter;
      target.classList.add('opened');
      if (target.classList.contains('empty')) {
        openEmpty(target);
      }
      win();      
      lose(target);           
    } /*
    if (event.button === 2) {
      if (!target.classList.contains('flagged')) {
        target.classList.add('flagged');
        target.innerHTML = '<span> &#9873; </span>';
      } else {
        target.classList.remove('flagged');
      }      
    }*/
  }
}

function game(width, height, minesAmount) {   
  deleteBoard();  
  createBoard(width, height);
  let board = document.getElementById('board');
  board.onmousedown = function (event) { 
    if (event.target.classList.contains('cell')) {
      startGame(event, minesAmount, width, height);  
      timerUp = setInterval(() => timerBlock.innerText = timer++, 1000);
      board.onmousedown = function (event) { mouseDown(event); }; 
    }
  }   
}

game(boardWidth, boardHeight, totalMineAmount);

startButton.onmousedown = () => {
  prepareToGame();  
  game(boardWidth, boardHeight, totalMineAmount);
}

// Input custom's choice

submitButton.addEventListener("click", function() {
  totalMineAmount = inputMine.value;
  const chosenLevel = document.querySelector('.radio:checked'); 
  if (chosenLevel.id === 'medium') { boardWidth = boardHeight = 15;
  } else if (chosenLevel.id === 'hard') { boardWidth = boardHeight = 25;
  } else { boardWidth = boardHeight = 10 }   
  prepareToGame();  
  game(boardWidth, boardHeight, totalMineAmount);   
});
