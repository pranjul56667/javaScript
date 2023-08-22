//1
// let arr=[7,9,4,5,8,5,8,5]
// let a=prompt('enter the number')
// a=Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//2
// let arr=[7,9,4,5,8,5,8,5]
// let a
// do{
//   a=prompt('enter the number')
//   a=Number.parseInt(a)
//   arr.push(a)
// }
// while(a!==0)
// console.log(arr)

//3
// let arr=[1,2,30,4,50,6,7,83,670]
// let a= arr.filter((num)=>{
//   return num%10==0
// })
// console.log(a)

//4
// let arr=[1,2,30,4,50,6,7,83,670]
// let a= arr.map((num)=>{
//     return num*num
// })
// console.log(a)

//5
let arr=[1,2,3,4,5]
let a= arr.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a)