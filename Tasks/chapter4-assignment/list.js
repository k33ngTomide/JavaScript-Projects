
function arrayToList(numbers){
  let list = null;
  
  for(let index = numbers.length -1; index >= 0; index--) {
    list = {
      value: numbers[index], 
      rest: list
    };
  }

  return list;
}


let newList = arrayToList([1, 2, 3]);
console.log(newList);

function listToArray(list){

  let array = [];

}