
function validateString(input, callback) {

    setTimeout(function () {
  
      // input is said to be valid if it is a lowercase string
  
      if (typeof input === "string" && input === input.toLowerCase()) {
  
        return callback(null, true)
  
      }
  
      return callback(new Error('Invalid string'), null)
  
    }, 500)
  
}


const input = ['first', 'Second', 'thiRd', 4, false, 'true'];
let res= {};
input.forEach((ele)=> validateString(ele,(_,isValid)=>(res[ele]=isValid)));

setTimeout(()=>console.log(res),1000);
