let myArr=[1,2,3,4]
// console.log(myArr);
// console.log(myArr.splice(1,3));
// console.log(myArr.slice(1,3));

const newArr= new Array(0,1,2,3,4,6)
newArr.pop()
newArr.unshift(0)
newArr.shift()
// console.log(newArr.includes(4));
const sameArr=newArr.join()
// console.log(newArr);
// console.log(sameArr);
// slice,splice
console.log("A",myArr);
const myn1= newArr.slice(1,3)
console.log(myn1);
console.log("B",newArr);
const myn2=newArr.splice(1,3) //manipulate the original array
console.log("C",newArr);

console.log(myn2);



