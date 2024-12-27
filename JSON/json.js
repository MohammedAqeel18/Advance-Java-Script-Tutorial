const myObj = {
    name: "Aqeel",
    content : ["JavaScript", "React", "Node"],

    sub : function(){
        console.log("Hello World");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.sub();

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(sendJSON.name);
console.log(typeof myObj);
console.log(typeof sendJSON);

const reciveJSON = JSON.parse(sendJSON);
console.log(reciveJSON.name);
console.log(typeof reciveJSON);