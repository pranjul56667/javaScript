//program to remove duplicate then sort it in desending order
// let arr = [1,2,3,4,1,2,3,4,5,6,7,8,9,0,5,6,7,8,9,0];
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)
// for(let i=0;i<newArr.length-1;i++){
//     for(let j=0;j<newArr.length-i-1;j++){
//         if(newArr[j]<newArr[j+1]){
//             let temp=newArr[j]
//             newArr[j]=newArr[j+1]
//             newArr[j+1]=temp
//         }
//     }
// }
// console.log(newArr)

//find the output
// let x = {}, y = { name: "Ronny" }, z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y])

//find the output
// new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   })
//   .then(function (result) {
//     alert(result); // 1
  
//     return new Promise((resolve, reject) => { // (*)
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   }).then(function (result) { // (**)
//     alert(result); // 2

//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   }).then(function (result) {
//     alert(result); // 4
//   });