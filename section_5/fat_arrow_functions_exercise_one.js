// //Refactor the code
// var names= ["James","Ron","Lisa","Tommy"];
// var randomName = function(items){
//  return items[Math.floor(Math.random()*items.length)]
// }
// var randomNumber = function(maxNumber,minNumber){
//  return Math.floor(Math.random() * maxNumber) + minNumber;
// }
// console.log(randomName(names) + " magic number is " + randomNumber(5,2))

const names = ["James","Ron","Lisa","Tommy"];

let randomName = items => items[Math.floor(Math.random()*items.length)]

let randomNumber = (maxNumber, minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;

console.log(`${randomName(names)}'s magic number is ${randomNumber(5, 2)}`);
