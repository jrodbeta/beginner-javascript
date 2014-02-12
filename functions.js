
function greeting(name) {
  console.log("Go " + name);
}

greeting("Army");

var myFunc = function(name) {
  console.log("Go " + name)
}

myFunc("Navy");

function execute(func, name) {
    func(name);
}

execute(myFunc, "Air Force");

execute(greeting, "Marines");