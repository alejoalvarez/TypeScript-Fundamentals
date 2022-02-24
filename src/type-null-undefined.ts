// explicit
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; // Error

// convert to -> let otherVariable: any
let otherVariable = null;
otherVariable = 'test';

console.log('>>nullVariable', nullVariable);
console.log('>>otherVariable', otherVariable);

// undefined
let undefinedVariable: undefined = undefined;
//undefinedVariable = 'test'; // Error

let otherUndefined = undefined;
otherUndefined = 1;

console.log('>>undefinedVariable:', undefinedVariable);
console.log('>>otherUndefined:', otherUndefined);

// Null and Undefined like subtypes
// --strictNullChecks
let albumName: string;
albumName = null;
albumName = undefined;