// document.write('hello world');
// var ele= document.createElement('h1');
//  document.body.append(ele);
// // ele.innerText = 'hi gvchv  hgvhd hjgbnc mgcvhvc hjgxmbc hcbmncb  gjsbc jcbsnc';
// ele.textContent='welcome';
// ele.innerHTML='<a href="#">Google</a>';
// ele.innerHTML = "helloguys";
// setInterval(() => {
//     var date= new Date();
// ele.innerText=date; //same as 12th one
// },4000);
// setInterval(() => {
//     var time=new Date();
//     ele.innerText=time;
// }, 4000);
// setInterval(() => {
//     var date=new Date().getTime();
//     ele.innerText=date;
// }, 3000);
// var b = Array.from(document.getElementsByClassName('sel'));
// b.forEach(changecolor);
// function changecolor(pie){
//     pie.style.color='red';
// }
// var b= document.getElementById('a');
// a.style.color='blue';  //styling a
var b = Array.from(document.getElementsByClassName('sel'));
b.forEach(changecolor);
function changecolor(teja){
    setInterval(() => {
        var x =Math.random();
        if(x>0 && x<0.25){
            teja.style.color='green';
          }
          else if(x>=0.25 && x<0.5){
              teja.style.color='red';
          }
          else if(x>=0.5 && x<0.75){
              teja.style.color='blue';
          }
          else{
              teja.style.color='pink';
             }
        
    },50);
}

