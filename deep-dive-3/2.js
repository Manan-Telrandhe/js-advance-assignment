function makeallcaps(words){
    return new Promise((res,rej)=>{
        if(words.every(word=> typeof word === 'string')){
            res(words.map(word=> word.toUpperCase()));
        } else{
            rej("all items must be a string");
        }
    })
}
function sortWords(words){
    return Promise.res(words.sort());
}

let words = ['hi','hello','hey','24'];

makeallcaps(words).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})


