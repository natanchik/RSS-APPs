// import './style.css';

// Create tablo

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

// Create board

let boardWidth = 10;
let boardHeight = 10;
let boardArea = boardWidth * boardHeight;

function createBoard(boardWidth, boardHeight) {
  const board = document.createElement('div');
  board.classList.add('board');
  board.setAttribute('id', 'board');
  document.body.appendChild(board);
  for (let i = 0; i < boardHeight; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);
    for (let j = 0; j < boardWidth; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', `${i}-${j}`);    
      row.appendChild(cell);
    }
  } 
}

createBoard(boardWidth, boardHeight)

// Start the game

let mineList;
let totalMineAmount = 10;

function mine(totalMineAmount) {
  mineList = [];
  for (let i = 0; i < totalMineAmount; i++) {
    let mineX = Math.floor(Math.random() * boardWidth);
    let mineY = Math.floor(Math.random() * boardHeight);
    let mineCell = document.getElementById(`${mineX}-${mineY}`);
    while (mineCell.classList.contains('mined')) {
      mineX = Math.floor(Math.random() * boardWidth);
      mineY = Math.floor(Math.random() * boardHeight);
      mineCell = document.getElementById(`${mineX}-${mineY}`);
    } 
    mineCell.classList.add('mined');       
    mineCell.innerHTML = '<span> &#10038; </span>';
    mineList.push(`${mineX}-${mineY}`);
  }  
}

const colorNumbers = {1: '#0000FF', 2: '#00FF00', 3: '#FF4500', 4: '#9932CC', 5: '#FFA500', 6: '#FFFF00', 7: '#FF1493', 8: '#00FFFF' }

function calcMinesAround(mineList, boardWidth, boardHeight) { 
  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardHeight; j++) { 
      const cell = document.getElementById(`${i}-${j}`);
      if (cell.classList.contains('mined')) {
        continue;
      }  
      let cellsAround = [`${i-1}-${j-1}`, `${i-1}-${j}`, `${i-1}-${j+1}`, 
                         `${i}-${j-1}`, `${i}-${j+1}`,
                         `${i+1}-${j-1}`, `${i+1}-${j}`, `${i+1}-${j+1}`];
      const mineAround = mineList.filter(el => cellsAround.includes(el));  
      const sumMineAround= mineAround.length;      
      if (sumMineAround !== 0) {
        cell.innerText = sumMineAround;      
        cell.setAttribute('style', `color: ${colorNumbers[sumMineAround]}`);   
      } else {
        cell.classList.add('empty');
      }
    }
  }  
}

mine(totalMineAmount);
calcMinesAround(mineList, boardWidth, boardHeight);

// Game

function mouseDown(event) {
  const { target } = event;
  if (target.classList.contains('cell')) {    
    target.classList.add('opened'); 
    if (target.classList.contains('mined')) {
      alert('You lose');
    }
  }
}

tablo.onmousedown = function (event) { mouseDown(event); };

let board = document.getElementById('board');
board.onmousedown = function (event) { mouseDown(event); };
