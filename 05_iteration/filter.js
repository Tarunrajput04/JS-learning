const numBer=[1,2,3,4,5,6,,7,8,10]

// arrow function
const print= numBer.filter((nums)=>(nums>4))
// console.log(print);

// arrays of object of movies
 const movies =[
    {
        movie:"The Shawshank Redemption",rating: 9.3,streaming:"Netflix"
    },
    {
        movie:"The Godfather",rating: 9.2,streaming:"prime"
    },
    {
        movie:"The Dark Knight",rating: 9.0,streaming:"Netflix"
    },
    {
        movie:"Pulp Fiction",rating: 8.9,streaming:"prime"
    },
    {
        movie:"City of God",rating: 8.7,streaming:"prime"
    },
    {
        movie:"Alien",rating: 8.5,streaming:"Netflix"
    },
    {
        movie:"Incendies",rating: 8.0,streaming:"prime"
    },
    {
        movie:"Oppenheimer",rating: 8.3,streaming:"Netflix"
    },
 ]
  
const userMovies= movies.filter((Mz)=> { return Mz.rating>=8.3})
console.log(userMovies);

