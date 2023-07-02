/* const declaration creates block-scoped constants, much like variables declared using the let keyword. 
   The value of a constant can't be changed through reassignment (i.e. by using the assignment operator),
   and it can't be redeclared (i.e. through a variable declaration).
   However, if a constant is an object or array its properties or items can be updated or removed */

const a = 1
console.log(a) // output: 1
a = 2 // it will be error, because a is constant value
