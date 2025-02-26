// Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase

// function uppercase(str){
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }

// console.log(uppercase("hi"));
// console.log(uppercase("manan"));


// without using uppercase and slice

function uppercase(str){
    let char = str.charAt(0);
 
    let ascival = char.charCodeAt(0);
    
    if(ascival>=97 && ascival<=122){
     char = String.fromCharCode(ascival-32);
    }
 
    let rightstr = "";
 
    for(let i=1;i<str.length;i++){
     rightstr+=str[i];
    }
    return char+rightstr;
 }
 
 console.log(uppercase("hi"));