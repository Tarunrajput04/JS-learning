const ans=[1,2,3,4,5]
// using normal fucntion
// const print=ans.reduce(function (acc,currval) {
//     // console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc+currval
// },0)
// console.log(print);

// using arrow function
// const val=ans.reduce((acc,currval)=>(acc+currval),0)
// console.log(val);


const addTocart=[
    {
        itemName:"headphone",
        price:1000
    },
    {
        itemName:"hdmicable",
        price:250
    },
    {
        itemName:"projector",
        price:25000
    }
]
const priceTopay=addTocart.reduce((acc,product)=>(acc+product.price),0)
console.log(priceTopay);

