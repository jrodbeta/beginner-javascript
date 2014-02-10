var age = parseInt(process.argv[2]);

console.log("Age: " + age);

var minor;
if(age < 18) {
  minor = true;
} else {
  minor = false;
}

console.log("Minor: " + minor);