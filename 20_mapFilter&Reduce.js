// let num=[2,8,6,7,3]
// let temp=0;
// num.forEach((element)=>{
    // let sq=element*element
    // temp=temp+sq;
    // return element+1
// })
// console.log(temp)

let arr=[45,23,21]
let a=arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(a)

// let arr2=[45,5,23,7,21,1,3,5]
// let a2=arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)

// let arr3=[1,2,3,5,2,1]
// let a3=arr3.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(a3)
