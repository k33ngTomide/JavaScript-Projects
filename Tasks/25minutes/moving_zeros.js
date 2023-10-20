
function moveZero(array) {
// 
  // for (let index = 0; index < array.length; index++){
    // if (array[index] === 0){
      // array.splice(array[index]);
      // array.push(0);
    // }
  // }

  for (let counter = 0; counter < array.length; counter++){
    for (let index = counter + 1; index < array.length; index++){
      if(array[counter] === 0){
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
    }
  }

  return array;
}

module.exports = moveZero;