var age=prompt('enter your age');
if(age>21){
    document.write('welcome to the application');
    open("https://www.youtube.com");
}
else{
    alert('you cant access the application');
    setTimeout(() => {
        close();
    },4000);
}
