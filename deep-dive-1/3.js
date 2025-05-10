// Create a constructor function Calculator that creates objects with 3 methods:

// read() asks for two values using prompt and remembers them in object properties.

// sum() returns the sum of these properties.

// mul() returns the multiplication product of these properties.



function calci(){

    this.v1=0;
    this.v2=0;

    this.read = function(){
        this.v1 = Number(prompt("enter a number value one"));
        this.v2 = Number(prompt("enter a number value two"));
    }

    this.sum = function(){
        return this.v1+this.v2;
    }

    this.mul = function(){
        return this.v1*this.v2;
    }
}

const calculator = new calci();

calculator.read();
console.log("sum = ",calculator.sum());
console.log("mul = ",calculator.mul());

