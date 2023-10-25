

function isSubsequence(firstWord, secondWord){
  output = []; newArray = [];
  for (let index = 0; index < firstWord.length; index++){
    for (let counter = 0; counter < secondWord.length; counter++){
      if(secondWord[counter] == firstWord[index]){
        output.push(counter);
        newArray.push(counter);
      }
    }
  }

  output.sort();
  if(JSON.stringify(newArray) == JSON.stringify(output)){
    return true;
  }
  else{
    return false;
  }

}

module.exports = isSubsequence;