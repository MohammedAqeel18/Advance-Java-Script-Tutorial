function sum (num1,num2){
    return num1+num2;
}
console.log(sum(10,20)); // 30

//functions

    function sum(num1 ,num2){
        console.log(num1);
        console.log(num2);
        if (num2==undefined){
            return num1+num1;
        }
        return num1+num2;
    }
    
    console.log(sum(10,20))

//function2
function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("HAFSA"))