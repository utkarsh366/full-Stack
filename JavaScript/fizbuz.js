var num = prompt("Enter the number till where  you want to find fizzbuz:")

function fizbuz(num){
    var output =[];
    for(i = 1; i<num+1; i++ ){
        if (i % 3 == 0 && i%5==0) {
            output.push('FizzBuzz');
        } else if (i % 3 == 0) {
            output.push('Fizz')
        }else if (i % 5 == 0) {
            output.push('Buzz')
        }
        else{
            output.push(i);
        }
    }
return(output);
}
var result = fizbuz(parseInt(num));
alert(result);