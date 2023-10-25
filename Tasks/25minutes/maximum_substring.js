

function maxim(userInput){
  let maximum = -Infinity;
  let keeper = 0;
  let extraCounter = 1;

  while(extraCounter < userInput.length){
    for (let counter = 0; counter < userInput.length; counter++){

      for (let index = counter; index < counter + extraCounter; index++){
        keeper += userInput[index];
      }

      if (keeper > maximum){
        maximum = keeper;
      }
      keeper = 0;
    }
    extraCounter++;
  }


  return maximum;
}

let given = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
console.log(maxim(given));

module.exports = maxim;