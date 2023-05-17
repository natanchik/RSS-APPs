// import './style.css';
import { tablo } from './js/tablo.js';
import { levelBlock, submitButton } from './js/choiceLevel.js';
import { boardWidth, boardHeight, createBoard } from './js/createBoard.js';
import { totalMineAmount, mine, getCellsAround, calcMinesAround, mineList } from './js/startGame.js';

const instruction = document.createElement('h1');
instruction.classList.add('h1');
instruction.innerHTML = '<p>To restart the game push the button &#128578;</p>';
document.body.appendChild(instruction);

const mainBlock = document.createElement('div');
mainBlock.classList.add('mainBlock');
document.body.appendChild(mainBlock);
mainBlock.appendChild(levelBlock);

const board = document.createElement('div');
board.classList.add('board');
board.setAttribute('id', 'board'); 
mainBlock.appendChild(board); 

const lastGames = document.createElement('div');
lastGames.classList.add('lastGames');
lastGames.setAttribute('id', 'lastGames'); 
lastGames.innerHTML = '<p>Last games:</p>';
mainBlock.appendChild(lastGames);

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

function startGame(event, totalMineAmount) {
  const { target } = event;
  counter++; 
  counterBlock.innerText = counter;
  target.classList.add('opened');
  mine(totalMineAmount);
  calcMinesAround(mineList, boardWidth, boardHeight);
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

function game(boardWidth, boardHeight, totalMineAmount) {   
  deleteBoard();  
  createBoard(boardWidth, boardHeight);
  let board = document.getElementById('board');
  board.onmousedown = function (event) { 
    if (event.target.classList.contains('cell')) {
      startGame(event, totalMineAmount);  
      timerUp = setInterval(() => timerBlock.innerText = timer++, 1000);
      board.onmousedown = function (event) { mouseDown(event); }; 
    }
  }   
}

startButton.onmousedown = () => {
  prepareToGame();  
  game(boardWidth, boardHeight, totalMineAmount);
}

game(boardWidth, boardHeight, totalMineAmount);


// Input custom's choice

submitButton.addEventListener("click", function() {
  
  console.log('inputMine', inputMine);
  console.log('inputMine.value', inputMine.value);
  console.log('totalMineAmount', totalMineAmount);
   
  const chosenLevel = document.querySelectorAll('.radio:checked');
  console.log('chosenLevel', chosenLevel);
  console.log('chosenLevel.length', chosenLevel.length);
  console.log('chosenLevel[0].value', chosenLevel[0].value);
  console.log('chosenLevel[0].id', chosenLevel[0].id);
  console.log("chosenLevel[0].id == 'easy'", chosenLevel[0].id == 'easy');
  
  let side;

  if (chosenLevel[0].id === 'medium') { side = 15;
  } else if (chosenLevel[0].id === 'hard') { side = 25;
  } else { side = 10 }
   
  console.log('side', side);
  
  
  prepareToGame();  
  game(side, side, inputMine.value); 
  return false; 
});

