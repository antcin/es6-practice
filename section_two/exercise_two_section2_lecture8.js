//We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.Refactor the code to meet ES6 standards.
const cupcake = document.querySelector('.cupcake');
const container = document.querySelector('.orders')

const cupcakes = [ //not changing in this application
 {id:1,flavor:'Strawberry'},
 {id:2,flavor:'Apple'},
 {id:3,flavor:'Banana'}
]

let randomCupcake; //changing because we get random cupcake everytime
let orderNumber = 0; // changes everytime there's a new order
const baseAmount = 5; // constant as cupcakes are all 5
let finalAmount; // changes depending on discount ID
const dicountID = 2; // not changing in this application
const dicountAmount = 3; // not changing in the app
let message // changes depending on, random cupcake, final amount and order number

cupcake.addEventListener("click",function(){
 // Select a random cupcake
 randomCupcake = Math.floor(Math.random() * cupcakes.length) + 0;

 // Increment the order number, we get a different order with each cupcake.
 orderNumber += 1;

 // Depending on the "dicountID" variable, this cupcake is on sale or not.
 finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount -dicountAmount ):baseAmount;

 // Create the message
 message = '<div>- You won a ' + cupcakes[randomCupcake].flavor + ' for ' + finalAmount + '$ , your order # is '+ orderNumber + '</div>'
 container.insertAdjacentHTML('beforeend',message)

});
