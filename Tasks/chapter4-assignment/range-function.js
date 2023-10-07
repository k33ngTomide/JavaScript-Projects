

const range = function(start, end){
  let createdArray = []
  for(let counter = 0; counter <= end-start; counter++){
      createdArray.push(start+counter);
  }

  return createdArray;
}

console.log(range(1, 10));

const sum = function (userNumber){

  let total = 0;

  for(let counter= 0; counter < userNumber.length; counter++){
    total += userNumber[counter];
  }
  return total;
}

console.log(sum(range(1,10)));



const modifiedRange = function(start, end, step=1){
  let createdArray = []
  if (step < 0){
    for(let counter = start; counter >= start - end-1; counter+=step){
      createdArray.push(counter);
    }
  }
  else{
    for(let counter = 0; counter <= end - start; counter+=step){
      createdArray.push(start+counter);
    }
  }

  return createdArray;
}
console.log(modifiedRange(1, 10, 2));
console.log(modifiedRange(5, 2, -1));
