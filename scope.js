// //ES5
// var winner = true;
//
// function user(){
//   winner = false; // if we get rid of var, it's going to be in the global scope and return false
//   // console.log(winner) // if declared inside the function, it's going to be stored in function scope
// }
//
// user(); //triggers the function, outputs false
//
// console.log(winner) // if called outside scope of function, it is going to be stored in global scope (browser) and return true in this case


// var value = 10;
// var winner = true;
//
// if(value == 10){
//   var winner = false; //local scope only applies to functions not to if statements
// }
//
// console.log(winner)

//es6

const value = 10;
let winner = true;

if(value == 10){
  let winner = false;
}

console.log(winner) //expected output should be false, however - because let has its own scope - it is going to return true. Since we are using inside an if, it means it's going to work inside an if. If you console.log from if, it's going to return false because we're making a reference to winner but inside the scope of if.
