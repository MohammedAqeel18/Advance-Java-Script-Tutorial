//findind keys in object

const movie ={
    actor:"Tom Cruise",
    actress:"Angelina Jolie",
    year:2020,
    genre:"Action",
};

//delete key in object
delete movie.genre;
console.log(Object.values(movie));

//for in loop

for (let job in movie){
    console.log(`${job}, its ${movie[job]}`);
}

//boolean in object
console.log("actor" .hasOwnProperty(movie));

//destructuring in object

const{actor:myFavActor,myFavActress}=movie;
console.log(myFavActor);


