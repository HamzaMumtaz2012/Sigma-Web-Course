try {
  console.log("Hamza is best" )
} catch (error) {
console.log("Hamza is not best")
}finally{     //finally always work it never care that catch is applying or try is applying
  console.log("function ended")
}

let a = parseInt(5);
let b = parseInt("Harry");

function sum(a,b) {
  return a + b

}
if (isNaN(a) || isNaN(b)) {
  throw new SyntaxError("Tameez mein reh!!")
}
console.log(sum(a,b));

