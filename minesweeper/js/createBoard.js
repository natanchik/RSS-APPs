let boardWidth = 10;
let boardHeight = 10;

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

export { boardWidth, boardHeight, createBoard }