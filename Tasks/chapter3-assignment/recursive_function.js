

function isEven(userInput){
  
  let output;
  userInput -=  2;

  if (userInput == 0){ 
    output = true;
  }
  else if (userInput  == 1){
    output =  false;
  } 
  else{
    output = isEven(userInput);
  }
   
  return output;
}


let output = isEven(50);
console.log(output);


let  newOutput= isEven(75);
console.log(newOutput);