
const reverseArray = function (array){
  let newArray = [];

  let counter = 0;
  for(let count = array.length-1; count >= 0 ; count--){
    newArray[counter] = array[count];
    counter++;
  }

  return newArray;
}

let actual = reverseArray([1,2,3,4,5]);
console.log(actual);

const reverseArrayInPlace = function(array){
  
  for(let count = 0; count < array.length ; count++){
    for(let counter = count+1; counter < array.length; counter++ ){
      if(array[count] < array[counter]){
        let temp = array[count];
        array[count] = array[counter];
        array[counter] = temp;
      }
    }
  }

  return array;
}

let newActual = reverseArrayInPlace([1,2,3,4,5]);
console.log(newActual);