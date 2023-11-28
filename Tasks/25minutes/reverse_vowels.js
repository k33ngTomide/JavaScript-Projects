

function reverseVowels(word){

  let vowels = ["a", "e", "i", "o", "u"];

  let available_vowels = "";

  for (let letter of word){
    if(vowels.includes(letter.toLowerCase())){
      available_vowels += letter.toLowerCase();
    }
  }

  available_vowels = available_vowels.split("").reverse().join("");

  new_index = 0;
  new_word = "";
  for(let counter = 0; counter < word.length; counter++){
    if (vowels.includes(word[counter])){
      new_word += available_vowels[new_index];
      new_index++;
    } else{
      new_word += word[counter];
    }
  }
  return new_word;
}



module.exports = reverseVowels;