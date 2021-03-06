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

// listOfUsers.forEach(function(name){
//   const select = document.querySelector('select')
//   select.insertAdjacentHTML('afterbegin', `<option value="${name}">${name}</option>`)
// })

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
];

const resultBrand = brands.find(function(brand){
  return brand.name === 'Samsung'
})

//find only return first result and stops checking for data. Kind of a switch in es5

console.log(resultBrand)

const cars = [
  {brand: "Ford", price: 500, available: 2, type: 'Sport car'},
  {brand: "Nissan", price: 200, available: 5, type: 'Wagon'},
  {brand: "Chevy", price: 300, available: 4, type: 'Sport car'},
  {brand: "Porsche", price: 100, available: 1, type: 'Urban'},
];

function getResults(price, type){
  return cars.find(function(car){
    return car.price < price
      && car.available > 0
      && car.type === type
  });
};

document.querySelector('.search').addEventListener("click", function(){

  let price = parseInt(document.querySelector('#price').value)

  let type = document.querySelector('#type').value

  let results = getResults(price, type)

  if(results){
    console.log(`Found ${results.brand} for $ ${results.price}`)
  } else {
    console.log(`No car found`)
  }

})

//every & some helper
const students = [
  {name: 'Francis', grade: 4},
  {name: 'Martin', grade: 5},
  {name: 'Martha', grade: 7},
]

// let allStudentsPassedTheCourse = false;

//es5 version
// for(let i = 0; i < students.length; i++){
//   let student = students[i]
//
//   if(student.grade < 6){
//       allStudentsPassedTheCourse = true;
//       break;
//   } else {
//       allStudentsPassedTheCourse = false;
//   }
// }

//es6
let allStudentsPassedTheCourse = students.some(function(student){
  return student.grade >= 6
})

console.log(allStudentsPassedTheCourse)

//reduce helper
const previous = 200;
const current = [
  {expense: 'Guitar', amount: 200},
  {expense: 'Mic', amount: 100},
  {expense: 'Strap', amount: 100}
]

const expenseResults = current.reduce(function(sum, expense){
  return sum + expense.amount
}, previous)

//whenever we call reduce, it enters the anonymous function and takes an argument at first (sum). This argument is going to be the starting point. At the bottom there is a value(previous). Whenever the loops start, reduce uses that value as a starting point, then it passes the time and then it goes to the first iteration.

console.log(expenseResults)

const usersReduce = [
  {name: 'Francis', lastname: 'Norton', age: 25},
  {name: 'Martha', lastname: 'Norton', age: 45},
  {name: 'Rob', lastname: 'Norton', age: 55}
]

const nameReduce = usersReduce.reduce(function(start, userReduce){
  start.push(userReduce.name)
  return start;
},[])

console.log(nameReduce)

//for of
const namesForOf = ["Jane", "Thomas", "James"];

for(let name of namesForOf){
  console.log(name)
}

const numbersForOf = [10, 20, 30, 40, 50];
let totalForOf = 0;

for(let number of numbersForOf){
  totalForOf += number
}

console.log(totalForOf)

//fat arrow functions part one
//es5
// const value = function(name, age){
//   return `My name is ${name} and I am ${age}`
// };


//es6
// const value = (name, age) => {
//   return `My name is ${name} and I am ${age}`
// };
// console.log(value("James", 45))

//no need for curly braces with single expression
// const value = (x, y) => x + y ;
// console.log(value(1, 2))

//no need for parentheses when we only have one single argument
const value = x => x + 10;

console.log(value(1))

//fat arrow functions part two
//es5
// const carsFatArrow = {
//   brands:['Ford', 'Audi', 'BMW'],
//   category: 'sportscar',
//   message: function(){
//     let $this = this;
//     return this.brands.map(function(brand){
//       console.log(`${brand} is a ${$this.category}`)
//     });
//   }
// }

//es6
// when using fat arrow functions, scope does not change
const carsFatArrow = {
  brands:['Ford', 'Audi', 'BMW'],
  category: 'sportscar',
  message: function(){
    return this.brands.map((brand) => {
      console.log(`${brand} is a ${this.category}`)
    });
  }
}

carsFatArrow.message();

//object literals
//es5
// const createCharacter = function(name, powers){
//   return {
//     name: name,
//     powers: powers,
//     getFriends: function(){
//       return 'Clark Kent'
//     }
//   }
// }
//
// const characterObj = createCharacter('Superman', 'Fly');
//
// console.log(characterObj);

//es6
const createCharacter = (name, powers) => {
  return {
    name,
    powers,
    getFriends(){
      return 'Clark Kent';
    },
    getEnemies(){
      return 'Skeletor';
    }
  }
}

const characterObj = createCharacter('Superman', 'Fly');

console.log(characterObj);
console.log(characterObj.getFriends())

//default function arguments
//es5
// function carsDefaultFunctionArguments(brand){
//   if(!brand){
//     brand = "Ford"
//   }
//   console.log(`My brand is ${brand}`)
// }
//
// carsDefaultFunctionArguments()

//es6
function randomBrand(){
  const brands = ['ford', 'nissan', 'bmw']
  return brands[Math.floor(Math.random() * brands.length)]
}

function carsDefaultFunctionArguments(brand = randomBrand()){
  console.log(`My brand is ${brand}`)
}

carsDefaultFunctionArguments()

//rest operator
//es5
// function args(arg1, arg2, arg3){
//   const arguments = [arg1, arg2, arg3]
//
//   console.log(arguments)
// }
//
// args("val 1", "val2", "val 3")

//es6
// function hey(){
//   console.log('Hey')
// }
function args(...args){
  console.log(`My name is ${args[0]}, I am ${args[1]} years old and my eyes are ${args[2]}.`)
}

args("Francis", "20", "green")

//spread operator
//es5
// const brandsSpread = ["Ford", "Nissan"];
// const otherBrands = ["Audi", "Bmw"];
//
// const spreadArray = brandsSpread.concat(otherBrands)

//es6
const CarBrandsSpread = ["Ford", "Nissan"];
const otherCarBrands = ["Audi", "Bmw"];


const spreadArray = [...CarBrandsSpread,...otherCarBrands,'Other brand'];
console.log(spreadArray)
