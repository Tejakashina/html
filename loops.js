var arr=[10,20,30,40,50,60,70,80];
for(z=0;z<arr.length;z++){
    console.log(arr[z]);
};
for(z=0;z<arr.length;z++){
    console.log(arr[3]);
};
var teja=[10,'robo',,null,undefined]
teja.style='bold';
for( var s of teja){
    console.log(s);
}
for(var p in teja){
     console.log(p);
};
for(var q in teja){
console.log(teja[q]);
};
var box = {
    firstname: 'priya',
    lastname : 'sri',
    age : 25
}
for(var i in box){
    console.log(i);
};
for(var i in box){
    console.log(box[i]);
};
var arr=[10,20,30,40,50,60];
for(var i=0; i<arr.length; i++){
    if(arr[i]==30){
        continue;
    }
    console.log(arr[i]);
};
for(var p=0; p<arr.length;p++){
if(arr[p]==40){
    break;
}
console.log(arr[p]);
};
for( var q in arr){
if(arr[q]==20){
    break;
}
console.log(arr[q]);
};
for( var h in arr){
    if(arr[h]==40){
        continue;
    }
    console.log(arr[h]);
}
for( var t of arr){
    if(t==40){
        continue;
    }
    console.log(t);
}
for( var j of arr){
    if(j==40){
        break;
    }
    console.log(j);
}