function testnum(num){
    return new Promise((res,rej)=>{
        if(num>=10){
            res("number is greater than 10");
        }
        else{
            rej("number is less than 10");
        }
    })
}

testnum(18).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})