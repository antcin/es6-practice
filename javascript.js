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

console.log(`My name is ${user.name}, I am ${user.age} years old and I work as a ${user.position}`);


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

//es5
var list = document.querySelector('.user_list')

function addUser(name, lastname){
  var template = '';

  template += '<div class="user">';
  template += '<div>' + name + '</div>'
  template += '<div>' + lastname + '</div>'
  template += '</div>'

  list.insertAdjacentHTML("beforeend",template)
}

addUser('Francis', 'Jones');
addUser('Jane', 'Doe');

//es6
var list = document.querySelector('.user_list')

function addUser(name, lastname){
  var template = `
  <div class="user">
    <div>${name}</div>
    <div>${lastname}</div>
  </div>
  `

  list.insertAdjacentHTML("beforeend",template)
}

addUser('Francis', 'Jones');
addUser('Jane', 'Doe');

console.log("This\nis\nawesome\xa0")
//es6 has a method to escape raw content
console.log(String.raw`This\nis\nawesome\xa0`)


const artists = ['Clapton', 'U2', 'Bruno Mars', 'Lamar'];

//es5
for(var i = 0; i < artists.length; i++){
  console.log(artists[i])
}

//es6 using forEach
artists.forEach(function(artist){
  console.log(artist)
});

//more es6 forEach
const moreNames = ['francis', 'lisa', 'marion', 'ron'];
let template = '';

moreNames.forEach(function(name){
  template += `<div>Hi, my name is ${name}</div>`
});
document.body.insertAdjacentHTML("afterbegin", template)

//es5 forEach - working with array of objects
var purchases = [
  {quantity:2, amount:100},
  {quantity:5, amount:100},
  {quantity:10, amount:100}
]

var total = 0;
// for(var i = 0; i < purchases.length; i++){
//   total += purchases[i].quantity * purchases[i].amount
// }
//

//es5 forEach - working with array of objects
purchases.forEach(function(item){
  total += item.quantity * item.amount
});

console.log(total)

//MAP HELPER

//es5
// var numbers = [1, 2, 3, 4, 5];
// var otherArray = [];
//
// for(var i = 0; i < numbers.length; i++){
//   otherArray.push(numbers[i] * 10)
// }


//es6
const otherNumbers = [1, 2, 3, 4, 5];

const otherArray = otherNumbers.map(function(number){ //map always returns something
  return number * 10
})

console.log(otherArray)

const users = [
  {user: 'Martin Jones', age: 32, eyes:'brown'},
  {user: 'Jane Doe', age: 20, eyes: 'blue'},
  {user: 'Brian Wrecker', age: 40, eyes: 'brown'}
];

const listOfUsers = users.map(function(user){
  return user.user
});

listOfUsers.forEach(function(name){
  const select = document.querySelector('select')
  select.insertAdjacentHTML('afterbegin', `<option value="${name}">${name}</option>`)
})

// const products = [
//   {name: 'iPad', category: 'devices'},
//   {name: 'Sony 3D', category: 'TV'},
//   {name: 'E256', category: 'blender'},
//   {name: 'Super vision', category: 'TV'},
//   {name: 'iPhone 7', category: 'phones'}
// ]
//
// const result = products.filter(function(product){ //filter always returns something
//   return product.category === 'TV'
// });

const products = [
  {name: 'iPad', category: 'devices', number: 20, price: 200},
  {name: 'Sony 3D', category: 'TV', number: 0, price: 400},
  {name: 'E256', category: 'blender', number: 3, price: 50},
  {name: 'Super vision', category: 'TV', number: 7, price: 500},
  {name: 'iPhone 7', category: 'phones', number: 40, price: 2}
]

const result = products.filter(function(product){
  return product.category === 'TV' &&  product.number > 0 && product.price > 200
});

console.log(result)

//find helper
const brands = [
  {name: 'Apple', id: 1},
  {name: 'HP', id: 2},
  {name: 'Samsung', id: 3},
  {name: 'Samsung', id: 4}
]

const resultBrand = brands.find(function(brand){
  return brand.name === 'Samsung'
})

//find only return first result and stops checking for data. Kind of a switch in es5

console.log(resultBrand)
