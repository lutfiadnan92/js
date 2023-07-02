// The let declaration declares a block-scoped local variable,

// example
let a = 1
console.log(a) // output: 1

/* let allows you to declare variables that are limited to the scope of a block statement,
   or expression on which it is used,
   unlike the var keyword, which declares a variable globally,
   or locally to an entire function regardless of block scope.
   let can only be accessed after its declaration is reached 
   and declarations are commmonly regarded as non-hoisted*/

// example
b
console.log(b) // output: b is not defined
let b = 1
console.log(b) // output: 1
