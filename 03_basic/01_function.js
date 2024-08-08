function addTwoNumbeer(num1=1,num2=2){
    return num1+num2
}
const result=addTwoNumbeer();
// console.log(result);
function calculateCart(...num1){
    return num1
}
// console.log(calculateCart(200,3000,477));


//  object in function
const description={
    name:"tarun",
    age:23,
}
function handleObject(anyobject){
    console.log(`name of person is ${anyobject.name} and their age is ${anyobject.age}`);   
}
handleObject(description)

// arrray in function
const myArr=[200,300,66,100]
function ReturnVAlue(getArr) {
    return getArr[1]
}
console.log(ReturnVAlue(myArr));
