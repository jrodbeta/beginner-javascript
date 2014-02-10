var age = parseInt(process.argv[2]);

console.log("Age: " + age);

var minor = (age < 18) ? true : false;

console.log("Minor: " + minor);