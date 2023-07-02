// The var statement declares a function-scoped or globally-scoped variable

// example
var a = 1
console.log(a) // output: 1

/* var declarations, wherever they occurs, are processed before any code is executed.
   this is called hoisting
   Duplicate variable declarations using var will not trigger an error,
   even in strict mode, and the variable will not lose its value, unless another assignment is performed*/

// example
b
console.log(b) // output: undefined
var b = 1
console.log(b) // output: 1
