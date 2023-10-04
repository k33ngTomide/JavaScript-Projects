
let array = [5, 6, 3, 6, 8, 3, 6]

console.table(array);

for(let i in array){
  process.stdout.write(`${i}`);
}

for (let i of array) {
  process.stdout.write(`${i}`)
}

let obj = {
  name: "Akintomide",
  age: "23",
  height: "5'4",
  cohort: 15
}

let objValues = Object.values(obj);
let objKey = Object.keys(obj);

for(let i of objValues){
  process.stdout.write(`${i}`)
}