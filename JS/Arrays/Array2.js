const myArray=[];
//adding elements to the array

myArray[0]="Aqeel"
myArray[1]="Hafsa"
myArray[2]=718
myArray[3]=true
console.log(myArray)

console.log(myArray);

console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[myArray.length-1])

//add new elemtns to the array
myArray.push("Ashari")
console.log(myArray)

//adding elements front
myArray.unshift("HAFASH")
console.log(myArray)

//deleting elements from the end
myArray.pop();
console.log(myArray)

//deleting elements from the front
myArray.shift();
console.log(myArray)

//splice
myArray.splice(1,2)
console.log(myArray)

//replace values using splice
myArray.splice(2,1,"Hafash, Aqeel");
console.log(myArray)

//slice
const newArray = myArray.slice(1,2);
console.log(newArray);

console.log(myArray)

//reverse
myArray.reverse();
console.log(newArray);

console.log(myArray)

//join
const newArray2 = myArray.join();
console.log(newArray2);

//join // split
const newArray3 = newArray2.split(',');
console.log(newArray3)

//joining 2 arrays
myArray4=["false", 27, "Hafsa"];
console.log(myArray4);
{ 
const newArray=myArray4.concat(myArray4);
console.log(newArray);
}

//spread operator
const newArray5=[...myArray4, ...myArray];


const earnMoneyA=["FrontEnd", "Backend", "FullStack"];
const earnMoneyB=["AI", "ML", "DataScience"];

const growMoneyA=["Investment", "Stocks", "RealEstate"];
const growMoneyB=["Crypto", "Forex", "Bonds"];

const giveMoney=["Charity", "Donations", "Zakat"];

const earnMoney=[earnMoneyA,earnMoneyB];
const growMoney=[growMoneyA,growMoneyB];
console.log(earnMoney[0][1], growMoney[1][2], giveMoney[2])

const aqeel =[earnMoney,growMoney,giveMoney];
console.log(aqeel[0][0][1]);