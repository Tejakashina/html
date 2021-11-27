var arr=['leja','pooja','teja','kaja'];
console.log(arr);
arr[4]='roja';
console.log(arr);
arr[2]='mirja'
console.log(arr);
arr.color= 'red';
var arr1=[100,'teja', false, null, undefined]
console.log(arr1);
arr1[2];
console.log(arr1[2]);
var arr2=[100,'teja',,true,undefined];
console.log(arr2);
arr2[1]='red';
console.log(arr2);
arr2[2]='vodka';
console.log(arr2);
var persons = [
    {empname: 'teja' , salary: 70000},
    {empname: 'pooja' , salary: 80000},
];
console.log(persons);
persons[2]= {empname: 'prathyu' , salary: 90000};
console.log(persons);
console.log(persons[1].salary);
var date= new Date();
console.log(date); // shows current date with time
var date= new Date(1996,10,11,03,30);
console.log(date);
var date= new Date(0);
console.log(date); // shows frst date for milliseconds(0)
var date= new Date("november 11 2011 06:30");
console.log(date); // date in string
var date= Date.now();
console.log(date); // shows date in milliseconds
console.log(Date(1637741397073)); // today date from millisec to date
var date2 = new Date(1997,08,16);
console.log(date2);
var milli=date2.getTime();
console.log(milli);
var date=new Date(milli);
console.log(date);
