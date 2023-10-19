/*Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.*/

function flattenArrayed(givenArray){

  let mainArray = [];

  for(let counter = 0; counter < givenArray.length; counter++){
    for(let elements = 0; elements < givenArray[counter].length; elements++){
      mainArray.push(givenArray[counter][elements]);
    }
  }
  return mainArray;
}

function flattenArray(givenArray) {

  return givenArray.reduce( (mainArray, currentArray) => 
    mainArray.concat(currentArray), []
  );
}

module.exports = flattenArray;