import { boardWidth, boardHeight } from './createBoard.js';

let totalMineAmount = 10;
let mineList = [];

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

function calcMinesAround(mineList, boardWidth, boardHeight) { 
  const colorNumbers = {1: '#0000FF', 2: '#00FF00', 3: '#FF00FF', 4: '#FFFF00', 
                      5: '#FFA500', 6: '#00FFFF', 7: '#800000', 8: '#008080' }
                      // {1: 'blue', 2: 'lime', 3: 'fuchsia', 4: 'yellow', 
                      //  5: 'orange', 6: 'cyan', 7: 'maroon', 8: 'teal' } 
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

export { totalMineAmount, mine, calcMinesAround, mineList }