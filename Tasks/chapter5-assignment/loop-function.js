/*Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping.*/

function loop(value, test, update, body){
  let n = value;
  for (let counter = 0; counter < 10; counter++){
    if(test(n)){
      console.log(body(n));
      n = update(n);
    }
  }

  return `Done ${n}times`
}

console.log(loop(0, (x) => {
  return x < 10 ? true : false;
}, (z) => z += 1, (y) => {
  return `This ran ${y}times already`
}));
