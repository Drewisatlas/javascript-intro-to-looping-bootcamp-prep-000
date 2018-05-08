function forLoop(array) {
for(let i = 0; i < 25; i++) {
<<<<<<< HEAD
 if (i === 1) {
   array.push("I am 1 strange loop.")
 }
 else {
   array.push("I am ${i} strange loop${ i === 0 ? '' : 's'}.");
 }}
 return array
}

function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
   return array
}

  
  
  
  
=======
 if (i === 1) 
   console.log("I am 1 strange loop.")
 }
 else {
   console.log("I am " + ${i} + " strange loops.");
 }
 return array
}
>>>>>>> c5f56e301653c29350873303458eba42a23a409f
