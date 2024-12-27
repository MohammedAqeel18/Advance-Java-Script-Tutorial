

const myObj2={
    Uni: "Uva Wellassa University",
    location:"Badulla",
    degree:"Bsc in Computer Science and Managment",
    Year: 2022,

Future :{
    Job:"Software Engineer",
    Company:"Google",
    Salary:200000
},
Hobbies:["Reading","Coding","Gaming"],
//functions in object
action: function(){
    return "I Love You";
}

}
console.log(myObj2.action());


//functions2
//functions in object
const myObj3={
    Uni: "Uva Wellassa University",
    location:"Badulla",
    degree:"Bsc in Computer Science and Managment",
    Year: 2022,

Future :{
    Job:"Software Engineer",
    Company:"Google",
    Salary:200000
},
Hobbies:["Reading","Coding","Gaming"],
//functions in object
action2: function(){
    
        return `Earn Money by learning ${this.degree} and works as ${this.Future.Job}`
    }
}


console.log(myObj3.action2());


//functions3
//functions in object

const vehicle={
    brand:"Toyota Car",
    year:2020,
    doors:4,

    engine: function(){
        return "booooommmm!!!";
    }
};

console.log(vehicle.engine());

//inheritance in objects
const car = Object.create(vehicle);
console.log(car.engine());

//modify the object (inherited object)


const sunny = Object.create(van);
sunny.engine=function(){
    return "vroom vroom!!!";
};

console.log(sunny.engine());

