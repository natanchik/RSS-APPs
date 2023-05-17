let boardWidth = 10;
let boardHeight = 10;

// Fill board with rows and cells

function createBoard(boardWidth, boardHeight) {  
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

// Input custom's choice
/*
document.getElementById("submit").addEventListener("submit", function() {
  console.log('inputMine', inputMine);
  console.log('inputMine.value', inputMine.value);  
   
  const chosenLevel = document.querySelectorAll('.radio:checked');
  
  console.log("chosenLevel[0].id == 'easy'", chosenLevel[0].id == 'easy');
  
  if (chosenLevel[0].id === 'medium') { boardWidth = boardHeight = 15;
  } else if (chosenLevel[0].id === 'hard') { boardWidth = boardHeight = 25;
  } else { boardWidth = boardHeight = 10 }
   
  console.log('boardWidth', boardWidth);
  
  prepareToGame();  
  game(boardWidth, boardHeight, inputMine.value); 
  return false; 
});
*/
export { boardWidth, boardHeight, createBoard }