// Let's get some input.
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Pick a number, any number: ", function(answer) {
  if(isNaN(answer)) {
    console.log("'" + answer + "' is not a number.")
  } else {
    console.log("'" + Number(answer) + "' is a number.")
  }

  rl.close();
});