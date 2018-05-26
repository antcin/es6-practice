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

  //node[i] => div 0
  //node[i] => div 1
  //node[i] => div 2
  //node[i] => div 3
  // js doesn't know what's happening and overrides the previous till it reaches the last


  divs[i].addEventListener('click', function() {
    console.log('you clicked div #' + i)
  })
}
