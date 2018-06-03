//Refactor the code, make it really slim :)
// var name = "Francis";
// var lastname = "Jones"
// var age = 23;
// var obj
// function createObject(name,lastname,age){
//    obj = {
//        name:name,
//        lastname:lastname,
//        age:age,
//    }
//    return obj;
// }
// console.log(createObject(name,lastname,age))

var name = "Francis";
var lastname = "Jones";
var age = 23;
var createObject = (name,lastname,age) => {
   return {name, lastname, age,}
}

console.log(createObject(name,lastname,age))
