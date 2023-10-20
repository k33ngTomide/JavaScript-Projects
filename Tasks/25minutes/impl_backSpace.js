
function useBackSpace(firstWord, secondWord){
  
  let backspacer = function(word){
    let newWord = "";
    for(let counter = 0; counter < word.length; counter++){
      if(word[counter] == "#"){
        newWord = word.replace(word[counter], "").replace(word[counter - 1], "");
      }
    }

    if(word.includes("#")){
      newWord = backspacer(newWord)
    }

    return newWord;

  }

  let newFirstWord = backspacer(firstWord);
  let newSecondWord = backspacer(secondWord);

  if(newFirstWord == newSecondWord) {return true;}
  else {false;}

}

module.exports = useBackSpace;