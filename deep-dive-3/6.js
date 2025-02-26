//provided code 

// for(var i = 0; i < 10; i++) {

//     setTimeout(function() {
 
//       console.log(i); 
 
//     }, 10);
 
//  }

//  main problem is var is functioned scope not block scope that is why all the callback inside the setTimeout share the same variable value of i

// fixing the code :-

for(let i = 0; i < 10; i++) {

    setTimeout(function() {
 
      console.log(i); 
 
    }, 10);
 
 }