/**
 * Array.prototype.map()
 * 
 * @type built-in method
 * @returns a new array
 * @description as the name implies, it maps a new array
 * 
 * 
 * (1) Syntax
 * ____________________________________________________________________
 * 
 * |-------------------------------------|
 * |  array.map(callbackFunction, this)  |
 * |-------------------------------------|
 * 
 * 
 * (2) Parameters
 * ____________________________________________________________________
 * 
 * The map() method has 2 parameters (passing 2 arguments on execution): "callbackFunction" and "this".
 *  - callbackFunction(element, index, array)
 *    Function that will execute every element of the array. The callback function has 3 parameters: "element", "index", "array".
 *    But "array" is probably rarely used.
 *  - this
 *    "this" refers to ... (Will be updated soon ...)
 * 
 * 
 * (3) What Does the map() Method Do/Doesn't
 * ____________________________________________________________________
 * 
 * - Creates a new array from calling a callback function for every array element.
 * - Doesn't execute the function for empty elements.
 * - Doesn't change the original array.
 * 
 * 
 * @author Aldy
 */


// Examples:
const recentYears = ['2021', '2022', '2023'] // this is array ... and I'm not sure it's my day, just passing through day by day

recentYears.map(function(element, index, array) // this is the map() method execution ... and I think you are a good illusion
{
    console.log(`The year is ${element} which is part of the array ${array}. The current "year" position is at index ${index}.`) // iterating every element one by one ... and let me be the one
})
/**
 * Expected output:
 * 'The year is 2021 which is part of the array 2021,2022,2023. The current "year" position is at index 0.'
 * 'The year is 2022 which is part of the array 2021,2022,2023. The current "year" position is at index 1.'
 * 'The year is 2023 which is part of the array 2021,2022,2023. The current "year" position is at index 2.'
 */

// --- Or it can be written like this (with arrow function):
recentYears.map((element, index, array) =>
{
    console.log(`The year is ${element} which is part of the array ${array}. The current "year" position is at index ${index}.`)
})
/**
 * Expected output:
 * 'The year is 2021 which is part of the array 2021,2022,2023. The current "year" position is at index 0.'
 * 'The year is 2022 which is part of the array 2021,2022,2023. The current "year" position is at index 1.'
 * 'The year is 2023 which is part of the array 2021,2022,2023. The current "year" position is at index 2.'
 */


/**
 * Stores the new array in a variable
 * 
 * The map() method creates a new array (by manipulating the original "recentYears" array)
 * and stores it in the "happyNewYearGreetings" variable.
 */
const happyNewYearGreetings = recentYears.map(element => `Happy new year ${element}.`)

console.log(happyNewYearGreetings)
// Expected output: Array ["Happy new year 2021.", "Happy new year 2022.", "Happy new year 2023."]


/**
 * References:
 * 
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * @link https://www.w3schools.com/jsref/jsref_map.asp
 * @link https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/
 */