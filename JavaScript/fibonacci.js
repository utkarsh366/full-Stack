var num = prompt("Enter the number till where you want to see the Fibonacci sequence:")
var output = [];
function  fibo(num) { 
    let a=0, b=1;   
    console.log('Fibonacci series up to ' + num);     
    while (a <= num){        
      
        output.push(a);       
        let c = a+b;         
        a = b;                    
        b = c;          
    }    
}  
fibo(num);
alert(output);