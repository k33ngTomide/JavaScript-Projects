
function getLargest(numbers){
  let largest = 0;

  for (let counter in numbers) {
    if ( numbers[counter] > largest) {
      largest = numbers[counter];
    }
  }
  return largest;
}

const userInput = [1,29,95,60,9,13];
let userLargest = getLargest(userInput);
console.log(userLargest);