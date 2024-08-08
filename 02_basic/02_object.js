const mySum =Symbol("key1")
const jsUser ={
    name:"tarun",
    "full name":"Tarun rajput",
    // mySum:"myKey1", type of this is string and we need object so we use alternative declaration
    [mySum]:"myKey1",
    age:18,
    email:"tarun@gmail.com"
}
// // console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySum]);
// console.log(typeof jsUser[mySum])
// Object.freeze(jsUser)
jsUser.email="tarun1@gmail.com"
// console.log(jsUser);
jsUser.greeting = function(){
    console.log("hello js user");
    
}
// console.log(jsUser.greeting);
jsUser.greetingtwo= function(){
    console.log(`hello jsUser, ${this.name}`);
}
console.log(jsUser.greeting());

console.log(jsUser.greetingtwo());






