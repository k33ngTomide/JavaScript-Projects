

function addDigits(number){

  let returnedTotal = adder(number);

  if (returnedTotal >= 10){
    returnedTotal = addDigits(String(returnedTotal));
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



const expected = addDigits("384");
console.log(expected);
if (expected == 6) {console.log("Passed");}
else {console.log("Failed");}