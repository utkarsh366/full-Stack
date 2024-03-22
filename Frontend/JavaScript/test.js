// Testing these codes in console of Chrome


// Input-Output with var
console.log(2+3); 
var x = prompt("Write");
console.log(x);
myName = "Utkarsh";
alert("My name is "+ myName +"!");

// Swap the number
function test() {
var a = 7;
var b= 8;

var c =a;
a = b;
b=c;



console.log("a is " + a);
console.log("b is " + b);
}

//Random number

var n = Math.random();
n = n* 6;
n= Math.floor(n) + 1;
console.log(n);

//Array

//array guest list
var guestList =["angela", "utkarsh", "harsh", "john", "kunal"];
var name = prompt("write your name");
var found = false;
for(i=0;i<guestList.length;i++){
if(name.toLowerCase == guestList[i].toLowerCase){
    alert("You're welcome "+ (name))
    found = true;
    break;
    
}}

    if(!found){alert("Sorry! Come again next time.")
              
}


//Array Guest list without loop

var guestList = ["angela", "utkarsh", "harsh", "john", "kunal"];
var name = prompt("Write your name");

if (guestList.includes(name.toLowerCase())) {
    alert("You're welcome, " + name);
} else {
    alert("Sorry! Come again next time.");
}
