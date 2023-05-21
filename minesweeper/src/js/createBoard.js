const board = document.createElement('div');
board.classList.add('board');
board.setAttribute('id', 'board'); 

// Fill board with rows and cells

function createBoard(width, height) {  
  for (let i = 0; i < height; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    board.appendChild(row);
    for (let j = 0; j < width; j++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('id', `${i}-${j}`);    
      row.appendChild(cell);
    }
  } 
}

// Input custom's choice
/*
document.getElementById("submit").addEventListener("submit", function() {
  console.log('inputMine', inputMine);
  console.log('inputMine.value', inputMine.value);  
   
  const chosenLevel = document.querySelectorAll('.radio:checked');
  
  console.log("chosenLevel[0].id == 'easy'", chosenLevel[0].id == 'easy');
  
  if (chosenLevel[0].id === 'medium') { width = height = 15;
  } else if (chosenLevel[0].id === 'hard') { width = height = 25;
  } else { width = height = 10 }
   
  console.log('width', width);
  
  prepareToGame();  
  game(width, height, inputMine.value); 
  return false; 
});
*/
export { board, createBoard }