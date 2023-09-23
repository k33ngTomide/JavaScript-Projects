
console.log("Hello Tomide, Welcome to JavaScript");

var S = ''
for(var count = 1; count < 10; count++){
    for(var counter = 1; counter < count; counter++){
      S += '""';
    }
    S += ' \n'
}
console.log(S);