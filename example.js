console.log("My console statement!!");

// Syntax and Declaration

var score = 10; // ES5 (Before ES6)

let result = 50; //This is a part of ES6 - Ecmascript
const PI = 3.14; //ES6
console.log(score);
console.log(result);
console.log(PI);

score = 15;
console.log(score);
result = 55;
console.log(result);

// PI = 3.26;
// console.log(PI);
// TypeError: Assignment to constant variable.

/** Datatypes
 * 1. Number
 * 2. Strings
 * 3. Boolean
 * 4. Null
 * 5. Undefined
 * 6. Objects
 * 7. Symbols (es6)
 *
 * Loosely Typed Language
 */

score = 10;
result = "10";

console.log(score, result);

// BEDMAS(Bracket Exponent Division Multiplication Addition Substraction)
let finalScore = score + result; //Concatenating
console.log(finalScore);
let penalty = score - result; //Mathematical
console.log(penalty);
let totalgames = 5;
let avgscore = finalScore / totalgames;
console.log(avgscore);
// typeof

console.log(typeof finalScore);
console.log(typeof penalty);
console.log(typeof avgscore);

totalgames = "5";
avgscore = finalScore / totalgames;
console.log(avgscore);

let value = (finalScore ** 20 * 10) / (penalty + totalgames);
console.log(value);

totalgames = "five";
value = (finalScore ** 20 * 10) / (penalty + totalgames);
value = penalty + totalgames; //Relates to maths but does not makes sense
console.log(value); //NaN(Not a Number)
console.log(typeof value); //number
console.log(penalty * totalgames); //NaN
