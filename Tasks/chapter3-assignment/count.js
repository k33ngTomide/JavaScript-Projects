

function countBs(word){
  
  counter = 0;
  for(let index = 0; index < word.length; index++){
    if(word[index] == "B"){
      counter++;
    }
  }

  return counter;

}

let numberOfBs = countBs("Mama Bola Born Bola Before Bola Born Baby");
console.log("The number of Bs found is: ", numberOfBs);


function countChar(word, letter){
  
  counter = 0;
  for(let index = 0; index < word.length; index++){
    if(word[index] == letter){
      counter++;
    }
  }

  return counter;

}

let numberOfLetters = countChar("Mama Bola Born Bola Before Bola Born Baby", "o");
console.log("The number found is:", numberOfLetters);
