
function generate(length, width, pieces){
  
  let gameBoard = [];
  let gameRow = [];
  
  let index = 0;
  for(let counter = 0; counter < length; counter++){
    for(let newCounter = 0; newCounter < width; newCounter++ ){
      if(pieces[index].row == counter && pieces[index].col == newCounter){
        gameRow.push(pieces[index].value);
        index++;
      }
    }
    gameBoard.push(gameRow);
    gameRow = [];
  }

  return gameBoard;
}

let userLength = 3;
let userWidth = 3;

let obj = [
  {row: 0, col: 0, value : "X"},
  {row: 0, col: 1, value : "X"},
  {row: 0, col: 2, value : "O"},
  {row: 1, col: 0, value : "O"},
  {row: 1, col: 1, value : " "},
  {row: 1, col: 2, value : "X"},
  {row: 2, col: 0, value : "X"},
  {row: 2, col: 1, value : "O"},
  {row: 2, col: 2, value : "O"},
]

let output = generate(userLength, userWidth, obj);
console.table(output);
