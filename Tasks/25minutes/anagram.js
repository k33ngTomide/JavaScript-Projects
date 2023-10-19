
function isAnagram(firstWordInputted, secondWordInputted){
  firstWord = firstWordInputted.toLowerCase();
  secondWord = secondWordInputted.toLowerCase();

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
      lettersInWord.push(count);
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

  getTotalAscii = (character) => {
    let total = 0;
    for(let counter in character){
      let ascii = character.charCodeAt(counter);
      total += ascii;
    }
    return total;
  }
  

  let countedFirstWord = countLetters(firstWord);
  let countedSecondWord = countLetters(secondWord);
  let container = itContain(firstWord, secondWord);

  let firstAscii = getTotalAscii(firstWord);
  let secondAscii = getTotalAscii(secondWord);

  if (firstAscii != secondAscii){ return false;}
  
  if(countedFirstWord == countedSecondWord && container){ return true;}
  else{ return false;}
  
}

// console.log(isAnagram("anagram", "nAgaram"));
// console.log(isAnagram("chair", "cheer"));
// console.log(isAnagram("anagram", "nnnagrm"));

module.exports = isAnagram;