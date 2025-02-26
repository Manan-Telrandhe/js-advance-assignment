
function customsettimeout(xyz,time){
    const start = Date.now();
    console.log(start);
     while(Date.now() - start < time){
     }
     xyz();
 }
 
 
 customsettimeout(()=>{
     console.log("after waiting the time")
 },2000);
 
 
 console.log(Date.now());