
function every(values, test){

  for(let element of values){
    if (!test(element)) {return false;}
  }
  return true;
}

console.log(every([2, 4, 6, 8, 10], (x) => x % 2 == 0));
console.log(every([62, 61, 40, 73, 18], (x) => x % 2 == 0));

console.log(every(["salad", "plantain", "beans", "amala"], (word) => word.includes('a')));


function every(values, some){
  if(some(values)){
    return false;
  }
}

console.log( ["inheritance", 'polymorphism', 'abstraction', 'encapsulation'], (wordList) => {
  
});