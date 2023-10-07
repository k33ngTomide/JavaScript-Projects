

const isEven = function(userInput){
  
  let output = false;
  userInput -=  2;

  if(userInput != 0 && userInput != 1){
    isEven(userInput);
  }
  // if (userInput  == 1){ 
  //   output =  false;
  // } 
  else if (userInput == 0){ 
    output = true;
  }
  
  
  return output;
}


let output = isEven(50);
console.log(output);