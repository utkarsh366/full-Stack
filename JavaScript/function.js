function getMilk(money)

{
    console.log("move right");
    console.log("Move left");
    var milkPrice = 66;
    if (money >= milkPrice) {
      var milk =  money/milkPrice;}
      else {console.log ("You don't have enough money.")}
     milk =  Math.floor(milk);
     return ("You got " + milk + " bottle of milk.");


}
getMilk(500);

