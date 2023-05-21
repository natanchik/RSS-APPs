let mineList = []; 

function getCellsAround(i, j) {  
  let cellsAround = [`${i-1}-${j-1}`, `${i-1}-${j}`, `${i-1}-${j+1}`, 
                     `${i}-${j-1}`, `${i}-${j+1}`,
                     `${i+1}-${j-1}`, `${i+1}-${j}`, `${i+1}-${j+1}`]; 
  return cellsAround;
}

function mine(minesAmount, width, height) { 
  mineList = [];   
  for (let i = 0; i < minesAmount; i++) {
    let mineX = Math.floor(Math.random() * width);
    console.log('mineX', mineX);
    let mineY = Math.floor(Math.random() * height);
    console.log('mineY', mineY);
    let mineCell = document.getElementById(`${mineX}-${mineY}`);
    while (mineCell.classList.contains('mined') || mineCell.classList.contains('opened')) {
      mineX = Math.floor(Math.random() * width);
      mineY = Math.floor(Math.random() * height);
      mineCell = document.getElementById(`${mineX}-${mineY}`);
    } 
    mineCell.classList.add('mined');       
    mineCell.innerHTML = '<span> &#10038; </span>';
    mineList.push(`${mineX}-${mineY}`);
  }  
}

function calcMinesAround(mineList, width, height) { 
  const colorNumbers = {1: '#0000FF', 2: '#00FF00', 3: '#FF00FF', 4: '#FFFF00', 
                        5: '#FFA500', 6: '#00FFFF', 7: '#800000', 8: '#008080' }
                    // {1: 'blue', 2: 'lime', 3: 'fuchsia', 4: 'yellow', 
                    //  5: 'orange', 6: 'cyan', 7: 'maroon', 8: 'teal' } 
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) { 
      const cell = document.getElementById(`${i}-${j}`);
      if (cell.classList.contains('mined')) {
        continue;
      }      
      let idCellsAround = getCellsAround(i, j);  
      const mineAround = mineList.filter(el => idCellsAround.includes(el));  
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

export { getCellsAround, mine, calcMinesAround, mineList }