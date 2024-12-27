"use strict"

const makeError = ()=>{
    try{
        const name = "hello";
        name = "world";
    } catch(err){
        console.log(err.stack);
    }
};

makeError(); //TypeError: Assignment to constant variable.
