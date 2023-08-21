function x(y){
   y()
   console.log('x');
}
x(function y(){
    console.log('y');
})
setTimeout(function (){
    console.log('timer');
},5000)