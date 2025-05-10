// Create a function to calculate the factorial of a number using closure

function fact(n){
    function closure(n){
        return (n<=1)?1:n*closure(n-1);
    }
   console.log(closure(n));
}

fact(5);