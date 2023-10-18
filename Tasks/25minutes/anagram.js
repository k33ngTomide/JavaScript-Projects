
function isAnagram(firstWord, secondWord){
  if (firstWord.length != secondWord.length){return false;}

  let countLetters = function(word){
    let lettersInWord = []
    let count = 0

    for(let counter in word){
      for(let newCounter in word){
        if(word[counter] == word[newCounter]){
          count++;
        }
      }
      let obj = word[counter];
      lettersInWord.push({obj, count});
      count = 0;
    }
    return lettersInWord.sort;
  }

  let itContain = function(word, word1){
    for(let counter in word1){
      if(!word.includes(word1[counter])){
        return false;
      }
    }
    return true;
  }

  let countedFirstWord = countLetters(firstWord);
  let countedSecondWord = countLetters(secondWord);
  let container = itContain(firstWord, secondWord);
  
  if(countedFirstWord == countedSecondWord && container){ return true;}
  else{ return false;}
  
}

module.exports = isAnagram;