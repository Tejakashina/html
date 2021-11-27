// console.log(abc);
// var abc=15;
// console.log(xyz);
// function sample(){
//  var xyz=30;
// };
// sample(); //error
// function sample(){
//     console.log(xyz);
//     var xyz=10;
// };
// sample(); //undefined
// var mno=12;
// function sample(){-
//     console.log(mno);
// };
// sample(); //12
// var xyz='hello';
// console.log(xyz);
//     function sample(){
//         xyz='goodmrng';
//         console.log(xyz);
//     };
//     sample();
//     console.log(xyz);
    // var xyz ='hello';
    // console.log(xyz);
    // function sample(){
    //     var xyz='goodmrng';
    //     console.log(xyz);
    //  };
    //  console.log(xyz);
    //  sample();
    //  console.log(xyz);
    //    closure
     outer();
     function outer(){
         var outside = 'i am outer variable';
         console.log('outer function');
         console.log(outside);
    
         function inner(){
             var inside = 'i am inner variable';
             console.log('inner function');
             console.log(inside);
         };inner();
     };
//function chaining
//      function one(){
//          console.log('i am one');
//      };
//      function two(){
//          console.log('i am two');
//          return one;
//      };
//      function three(){
//          console.log('i am three');
//          return two;
//      };
// three()()(); //321
// function one(){
//     console.log('i am one');
// };
// function two(){
//     console.log('i am two');
//      return one;
// };
// function three(){
//     console.log('i am three');
//     return two;
// };
// var returnedvalue = three();
// // console.log(returnedvalue);
// // returnedvalue();
// var returned = two();
// // console.log(returned); 
// returned();
// setTimeout(function(){
//     console.log('hi');
// },3000);
// setInterval(() => {
//     console.log('hw r u');
// }, 1000);
// function callmom(){
//     setTimeout(() => {
//         console.log('she calls mom');
//     },5000);
// };
// function callvenky(){
//     setTimeout(() => {
//         console.log('she calls venky');
//     }, 1000);
// };
// callmom();
// callvenky(); 
// function callmom(){
//     setTimeout(() => {
//         console.log('she calls mom');
//         callvenky();
//     },5000);
// };
// function callvenky(){
//     setTimeout(() => {
//         console.log('she calls venky');
//     }, 1000);
// };
// callmom(); 
// callback
// function callmom(callback){
//     setTimeout(() => {
//         console.log('she calls mom');
//         callback();
//     },5000);
    
// };
// function callvenky(){
//     setTimeout(() => {
//         console.log('she calls venky');
//     }, 1000);
// };
// callmom(callvenky); 

// function callmom(callback){
//     setTimeout(() => {
//         console.log('she calls mom');
//         callback(calldad);
//     },5000);
// };
// function callvenky(func){
//     setTimeout(() => {
//         console.log('she calls venky');
//         func(callteja);
//     }, 3000);
// };
// function calldad(func1){
//     setTimeout(() => {
//         console.log('she calls dad');
//         func1();
//     },2000);
// };
// function callteja(){
//     setTimeout(() => {
//         console.log('she calls teja');
//     }, 1000);
// };

// callmom(callvenky); 
// function add(a,b){
//     return a+b;
// };
// function sub(a,b) {
//    return a-b; 
// };
// function mul(a,b){
//     return a*b;
// };
// function opt(a,b,opt){
//     var x=opt(a,b);
//     return x;
// };
// var result=opt(10,20,mul);
// console.log(result);
// function add(a,b){
//     return a+b;
// };
// function sub(a,b) {
//    return a-b; 
// };
// function mul(a,b){
//     return a*b;
// };
// function opt(a,b,opt1,opt2,opt3){
//     var x=opt1(a,b);
//     var y=opt2(a,b);
//     var z=opt3(a,b);
//     return [x,y,z];
// };
// var result= opt(10,20,sub,add,mul);
// console.log(result);
    
    



    
    

    
    


    
    
