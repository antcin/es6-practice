// const and let created to make the code more syntatic (more readable)

//ES5
var type = 'Cupcake';
var flavor = 'Apple';
var price = 5;

//ES6
// const - use whenever we expect the value of the content not to change throughout the entire application
// let use when we expect the value of the content to change

const type = 'Cupcake'; //plan not to change. Future developer who see the code, will know that if they change it, it might break the code.
let flavor = 'Apple'; //might change in the future. If changed, nothing happens
let price = 5; //might also change. If changed, nothing happens

//const and let, make the code more organised

type = 'something else' // would generate an error message if you try to re-assign a value to const
