function printnum(num){
    return new Promise((res,rej)=>{
    let time = Math.floor(Math.random()*6000);
      console.log(time);
        setTimeout(()=>{
            console.log(num);
            res();
        },time);
    })
}

function printseq(i=0){
    if(i>10) return;
    printnum(i).then(()=>{
        printseq(i+1);
    })
}

printseq();
