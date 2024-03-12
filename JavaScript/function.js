function getMilk(money, milkPrice) 

{
    console.log("move right");
    console.log("Move left");
    
    if (money >= milkPrice) {
      var milk =  money/milkPrice;
    var change = money%milkPrice}
      else {console.log ("You don't have enough money.")}
     milk =  Math.floor(milk);

     return ("You got " + milk + " bottle of milk" +" and change of "+ change);


}
getMilk(500, 66); 

