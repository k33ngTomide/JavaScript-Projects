
function implSpace(word){
  newWord = word.replaceAll("&", " ").replaceAll("%", ".    ");
  return newWord;
}

module.exports = implSpace;