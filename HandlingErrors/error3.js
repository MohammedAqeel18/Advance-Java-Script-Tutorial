"use strict"
//throw
const makeError = ()=>{
    try{
      throw new Error ("This is a custom error ")
    } catch(err){
        console.log(err.stack);
    }
};

makeError(); //TypeError: Assignment to constant variable.
