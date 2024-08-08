// const tUser = new Object() singleton object 
const t_user={}
t_user.id="123bd"
t_user.name="tarun"
// console.log(t_user);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);
console.log(Object.keys(t_user));


