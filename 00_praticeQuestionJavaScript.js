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

//
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

//
// let vowel='aeiouAEIOU'
// let input='aeiouAEIOU'
// let vowelCount=0
// for(let i=0;i<vowel.length;i++){
//     if(vowel.includes(input[i])){
//         vowelCount++
//     }
// }
// console.log(vowelCount)

//
// let arr = [1,2,3,4,5,4,3,2,7,8,9,3,2]
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     if(!newArr.includes(arr[i])){
//         newArr.push(arr[i])
//     }
// }
// console.log(newArr)

//
// let arr = [1,2,3,4,5,4,3,2,7,8,9,3,2]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// console.log(sum)

//
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

//
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

//
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


//
// let str='kumar'
// let reverse=''
// for(let i=str.length-1;i>=0;i--){
//     reverse=reverse+str[i]
// }
// console.log(reverse)

//
