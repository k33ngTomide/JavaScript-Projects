
word = "kissdry";

given = [6, 2, 3, 4, 1, 0, 5];

newWord = "";

for(let counter = 0; counter < given.length; counter++){
  newWord += word[given[counter]];
}

console.log(newWord);