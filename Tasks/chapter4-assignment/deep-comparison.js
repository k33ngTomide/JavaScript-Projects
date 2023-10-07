

function deepEqual(first, second){

  let output = false;
  if(typeof(first) == Object && typeof(second) == Object){
    if(first === second){
      output = true;
    }

  } else if (first == second){
    output = true;
  }
  return output;
}

firsNumber = 50;
secondNumber = 50;

obj1 = {"name": "Tomide", "age": 49};
obj2 = {"name": "Tomide", "age": 49};

console.log(deepEqual(firsNumber, secondNumber));
console.log(deepEqual(obj1, obj2));