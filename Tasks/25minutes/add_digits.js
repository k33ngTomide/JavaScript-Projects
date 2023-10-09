

function addDigits(input){
  let number = String(input);

  if(Number(number) <= 9){ return Number(number);}
  let returnedTotal = adder(number);

  if (returnedTotal >= 10){
    returnedTotal = addDigits(returnedTotal);
  }

  return returnedTotal;
  
}

function adder(number){
  total = 0;
  for(let counter = 0; counter < number.length; counter++){
    total += Number(number[counter]);
  }
  return total;
}



const expected = addDigits(0);
console.log(expected);

const value = addDigits(-9);
console.log(value);



const expected1 = addDigits("384");
if (expected1 == 6) {console.log("Passed");}
else {console.log("Failed");}