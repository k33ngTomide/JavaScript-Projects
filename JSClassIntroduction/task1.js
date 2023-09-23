

let array = [3, "2", 1, "joel", 8];
let newArray = [];

for(let i = 0; i < array.length; i++){
  if(typeof(array[i]) === "string"){
    newArray.push(array[i]);
  }
}

console.log(newArray);