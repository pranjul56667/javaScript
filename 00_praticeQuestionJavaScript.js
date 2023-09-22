//1
//fibnocie series
// const number =10
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

//2
//factrial number
// const number = 5
// if (number < 0) {
//     console.log('Error!');
// }
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

//3
// const cartItems = [
//     {id: 1, qty: 3, price: 300},
//     {id: 2, qty: 2, price: 100}
//   ]
//   function getTotal(carItems){
//     let total=0;
//     for(let i=0;i<cartItems.length;i++){
//         total= total+carItems[i].qty*carItems[i].price
//     }
//     console.log(total)    
//   }
//   getTotal(cartItems)

//4
// let vowel='aeiouAEIOU'
// let input='aeiouAEIOU'
// let vowelCount=0
// for(let i=0;i<vowel.length;i++){
//     if(vowel.includes(input[i])){
//         vowelCount++
//     }
// }
// console.log(vowelCount)

//5
// let arr = [1,2,3,4,5,4,3,2,7,8,9,3,2]
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

//6
// let arr = [1,2,3,4,5,4,3,2,7,8,9,3,2]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

//7
// let arr = [1,2,3,4,5,4,3,2,7,8,9,3,2]
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i-1;j++){
//         if(arr[j]>arr[j+1]){//for desending change the compare sign this '>' to this '<'
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)

//8
// const test = [[3, 2], [1], [4, 12]] //find sum of all odd numbers
// function oddball_sum(nums) {
//     let sum=0
//     for(let i=0;i<nums.length;i++){
//         for(let j=0;j<nums[i].length;j++){
//             if( nums[i][j]%2!=0 ){
//                 sum=sum+nums[i][j]
//             }
//         }
//     }
//     console.log(sum)
// }
// oddball_sum(test)

//9
// let arr = [1, 2, 3, 4, 5, 4, 3, 2, 7, 8, 9, 3, 2];
// let uniqueObj = {};
// let uniqueArr = arr.map((value) => {
//   if (!uniqueObj[value]) {
//     uniqueObj[value] = true;
//     return value;
//   }
// });
// uniqueArr = uniqueArr.filter(value => value !== undefined);
// console.log("Original Array:", arr);
// console.log("Array with Duplicates Removed:", uniqueArr);

//10
// let str='kumar'
// let reverse=''
// for(let i=str.length-1;i>=0;i--){
//     reverse=reverse+str[i]
// }
// console.log(reverse)

//11
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

//12
// find the output
// let x = {}, y = { name: "Ronny" }, z = { name: "John" };
// x[y] = { name: "Vivek" };
// x[z] = { name: "Akki" };
// console.log(x[y])

//13
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

//14
//prime number
// const num=54
// prime=true
// for(let i=2;i<13;i++){
//     if(num%i==0){
//         prime=false
//         break
//     }
// }
// if(prime){
//     console.log('prime number')
// }else{
//     console.log('not a prime number')
// }

//15
// let data = [
//     {
//         name: "A",
//         salary: 1000000,
//         incentive: 25,
//     },
//     {
//         name: "B",
//         salary: 600000,
//         incentive: 85,
//     },
//     {
//         name: "C",
//         salary: 950000,
//         incentive: 15,
//     },
//     {
//         name: "D",
//         salary: 1000000,
//         incentive: 65,
//     },
// ];
// const result = data.reduce((acc, person) => {
//     const total = person.salary + person.incentive;
    
//     acc.totalSalary += total;

//     if (total > acc.maxSalary) {
//         acc.maxSalary = total;
//         acc.maxSalaryPerson = person;
//     }

//     return acc;
// }, { totalSalary: 0, maxSalary: 0, maxSalaryPerson: null });
// console.log(result.totalSalary);
// console.log(result.maxSalaryPerson.name);
