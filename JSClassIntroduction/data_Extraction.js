const prompt = require('prompt-sync')();
allNumbers = [];
let numberOfRows = 0;
let numberOfColumns = 0;

function dataExtraction(){

  numberOfRows = Number(prompt("Enter the number of rows: "));
  numberOfColumns = Number(prompt("Enter the number of Column: "));


  input = [];

  for(let counter = 0; counter < numberOfRows; counter++){
    for(let newCounter = 0; newCounter < numberOfColumns; newCounter++){

      let userInput = Number(prompt("Enter Number: "));
      input.push(userInput);
    }
    allNumbers.push(input);

    input = [];
  }

  console.table(allNumbers);
}

function input_slice(){
  let row = Number(prompt("Enter wanted row: "));
  let startColumn = Number(prompt("Enter the start of column: "));
  let endColumn = Number(prompt("Enter the end of column: "));

  let rowIsInvalid = row > numberOfRows;
  let columnStartIsInvalid = startColumn > numberOfColumns || startColumn < 0;
  let columnEndIsInvalid = endColumn > numberOfColumns || endColumn < startColumn;

  if(rowIsInvalid || columnStartIsInvalid || columnEndIsInvalid){
    console.log("Invalid Entry, Check Input Again");
    input_slice();
  }

  let newArray = allNumbers[row].slice(startColumn, endColumn+1);
  console.log(newArray);
}

dataExtraction();
input_slice();
