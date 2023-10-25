
function convertRomanNumeral(romanNumber){
  let obj = {
    I : 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000 
  }

  let total = 0;
  for(let index = romanNumber - 1; index >= 0; index--){
    for(let keys = 0; keys < obj.length; keys++){

      if(romanNumber[index] == obj[keys]){

        total += obj[keys];
        
      }

      
    }
  }
  console.log(total);
  return total;
}

let con = convertRomanNumeral("MCMXCIV");
console.log(con);

module.exports = convertRomanNumeral;