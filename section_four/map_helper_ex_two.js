const cars = [
   {name:'Ford',price:200},
   {name:'Nissan',price:400},
   {name:'Nissan',price:600}
]

function convertPrice(price){
  return price * 0.75;
}

const prices = cars.map(function(car){
  return `${car.name} is ${convertPrice(car.price)} GBP`
})

console.log(prices)
