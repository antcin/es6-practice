const trips = [
   {to:'Brazil',distance:1000},
   {to:'Chine',distance: 2500},
   {to:'India',distance: 3000}
]

const distance = trips.reduce(function(sum, trip){
  return sum + trip.distance
}, 0)

console.log(distance)
