// //es5
// var divs = document.getElementsByTagName('div');
//
// for(var i = 0; i < divs.length; i++){
//
//   //node[i] => div 0
//   //node[i] => div 1
//   //node[i] => div 2
//   //node[i] => div 3
//   // js doesn't know what's happening and overrides the previous till it reaches the last
//
//
//   divs[i].addEventListener('click', function() {
//     console.log('you clicked div #' + i)
//   })
// }

//es6
var divs = document.getElementsByTagName('div');

for(let i = 0; i < divs.length; i++){

  //this works because let has its own scope
  // four different instances of let are created


  divs[i].addEventListener('click', function() {
    console.log('you clicked div #' + i)
  })
}

//TEMPLATE STRING/LITERALS

//es5
function returnEmployeeEs5(){
  var name = 'Francis';
  var age = 21;
  var position = 'Manager';

  console.log("ES5 - His name is " + name + ", he is " + age + "years old and he works as a " + position);
};

returnEmployeeEs5();

//es6
function returnEmployee(){
  const name = 'Francis';
  const age = 21;
  const position = 'Manager';

  console.log(`ES6 - His name is ${name}, he is ${age} years old and he works as a ${position}`);
};

returnEmployee();

const names = ['James', 'Ron', 'Ace'];

// can run logic in template strings
console.log(`The name is ${names[Math.floor(Math.random() * names.length - 1) + 1]}`)

const user = {
  name: 'Francis',
  age: 21,
  position: 'manager'
}

console.log(`My name is ${user.name}, I am ${user.age} years old and I works as a ${user.position}`);


//Network request - es5
function request(page, id){
  var URL = "http://server.com/" + page + "/" + id;

  console.log(URL)
}

request('pages', 5)

//Network request - es5
function request(page, id){
  const URL = `http://server.com/${page}/${id}`

  console.log(URL)
}

request('pages', 4)
