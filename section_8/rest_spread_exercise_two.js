//Refactor the code
// function showItems(arg1,arg2,arg3){
//    var arr = [arg2,arg3].concat(arg1)
//    console.log(arr)
// }
// showItems(["dogs","cats"],"turtles","sharks");

function showItems(arg1,...arg2){
  let arr = [...arg1,...arg2];
  console.log(arr);
}

showItems(["dogs","cats"],"turtles","sharks");
