var animal = 'dog'
//var youranimal = 'cat'

function myAnimal() {
  return animal
}


function yourAnimal() {
  var animal = 'cat'
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  //return youranimal - taken out because scope - can put a variable inside a function for only that function.
  return animal
}

function add2(n) {
   const two = 2
  return n + two

  // Feel free to move things around!
 
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction() 
theFunk
theFunk()


