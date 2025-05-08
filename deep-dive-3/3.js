function sleep(sec,callback){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            callback();
            res("callback executed");
        },sec*1000);
    })
}

console.log('testing');

sleep(5,function callback(){
    console.log("sleep executed");
}).then((data)=>{
    console.log(data);
})
