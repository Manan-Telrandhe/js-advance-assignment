// Deep clone Javascript Object (without using any internal methods of cloning). All properties along with functions, prototypes should get cloned to target objects.

function deepclone(obj){
    
    if(typeof obj !== 'object' || obj === null){

        return obj;
    }

    let clone = Array.isArray(obj)?[]:{};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key]=deepclone(obj[key]);
        }
    }

    return clone;
}

const obj1 = {
    name:"manan",
    age: 20,
    greet: function(){
        console.log("hi ",this.name);
    },
    hobby:{
        playing:"cricket"
    }
};

const clone = deepclone(obj1);

clone.name = "clone name";
clone.hobby.playing="cooking";

console.log(obj1);

console.log(clone);

clone.greet();