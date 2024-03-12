//twitter Word count feature

var x = prompt("Write your tweet");
var length= x.length;
var total = 256;
var remaining = total - length;
alert("You've written: " + length + " remaining letters are "+"-"  + remaining);

//Twitter 256 letter limit use

alert(prompt("Enter the tweet").slice(0,255));