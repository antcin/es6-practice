//We want to run a function that greets the user by his name, but if the name is not provided we want to show a default name.
// function greeting(name){
//    if(name === undefined){
//        name = 'user'
//    }
//    return 'Hello '+ name;
// }
// console.log(greeting())
greeting = (name = 'user' ) => {
  return `Hello ${name}`
}

console.log(greeting())
