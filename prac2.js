// function findPairNumberZero(arr){
//     let left = 0
//     let right = arr.length-1

//     while(left<right){
//       sum = arr[left] + arr[right]

//       if(sum == 0){
//         return [arr[left], arr[right]];
//       }else if(sum>0){
//         right--
//       }else{
//         left++
//       }
//     }
//   }

//   const result = findPairNumberZero( [-2,-3,-4,1,5,2])
//   console.log(result)

//   string anagram

// function stringAnagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false
//     }

//     let counter = {}
//     for(ltr of str1){
//         // counter[ltr] = (counter[ltr] || 0) +1;
//         if(counter[ltr]){
//           counter[ltr]++
//         }else{
//           counter[ltr] = 1
//         }
//     }

//     for(items of str2){
//        if (!counter[items]){
//             return false
//         }
//         counter [items] -= 1
//     }
//     return true
// }

// let check = stringAnagram("hello","heoll")
// console.log(check)

//by frequency counter

// const dublicateNumber = (array) => {
//     const nonDublicate = new Set();
//     const dublicate = [];

//     for (ele of array) {
//         if (nonDublicate.has(ele)) {
//             dublicate.push(ele)
//         } else {
//             nonDublicate.add(ele)
//         }
//     }
//     return dublicate
// }

// const myArray = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7]
// const result = dublicateNumber(myArray)
// console.log(result)

// function findMaxValue(arr) {
//     if (arr.length === 0) {
//         return undefined;
//     }

//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     return max;
// }

// let myArray = [3, 7, 2, 8, 5];
// let maxValue = findMaxValue(myArray);
// console.log("Max value:", maxValue);

// const findMaximumNumber = (array) => {
//     if(array.length === 0){
//         return undefined
//     }

//     let maxNumber = array[0];

//     for(let i = 0; i<array.length; i++){
//         if(maxNumber <array[i]){
//             maxNumber = array[i]
//         }
//     }
//     return maxNumber
// }

// const newArray = [2,3,4,5,6,7,8,];
// const result = findMaximumNumber(newArray);
// console.log(result);

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return undefined; // Not enough elements to find the second largest
//     }

//     let firstMax = arr[0] > arr[1] ? arr[0] : arr[1];
//     let secondMax = arr[0] > arr[1] ? arr[1] : arr[0];

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//             secondMax = arr[i];
//         }
//     }

//     return secondMax;
// }

// // Example usage:
// let myArray = [3, 7, 2, 8, 5];
// let secondLargest = findSecondLargest(myArray);
// console.log("Second largest element:", secondLargest);

// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return undefined; // Not enough elements to find the second largest
//     }

//     let firstMax = arr[0];
//     let secondMax = undefined;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if (arr[i] > secondMax || secondMax === undefined) {
//             // Update secondMax if the current element is greater than the current secondMax or if secondMax is still undefined
//             secondMax = arr[i];
//         }
//     }

//     return secondMax;
// }

// //Example usage:
// let myArray = [3, 7, 2, 8, 5];
// let secondLargest = findSecondLargest(myArray);
// console.log("Second largest element:", secondLargest);

// const find2ndLargest = (array) => {
//     if (array.length < 2) {
//         return undefined;
//     }

//     let firstMaxNumber = array[0];
//     let secondMaxNumber = undefined;

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > firstMaxNumber) {
//             secondMaxNumber = firstMaxNumber;
//             firstMaxNumber = array[i];
//         } else if (array[i] > secondMaxNumber || secondMaxNumber === undefined) {
//             secondMaxNumber = array[i];
//         }
//     }
//     return secondMaxNumber;
// };

// const myArray1 = [2, 3, 6, 7, 4, 6, 8]; 
// const result1 = find2ndLargest(myArray1);
// console.log(result1);


// function findMissingElement(arr, n) {
//     // Calculate the expected sum of the elements in a complete sequence
//     let expectedSum = (n * (n + 1)) / 2;

//     // Calculate the actual sum of the elements in the given array
//     let actualSum = 0;
//     for (let element of arr) {
//         actualSum += element;
//     }

//     // The missing element is the difference between the expected and actual sums
//     let missingElement = expectedSum - actualSum;

//     return missingElement;
// }

// // Example usage:
// let myArray = [1, 2, 4, 6, 3, 7, 8];
// let n = myArray.length + 1; // Since one element is missing
// let missingElement = findMissingElement(myArray, n);
// console.log("Missing element:", missingElement);



// const findMissingNumber = (array, n) => {

//     let expectedSum = (n * (n + 1)) / 2;

//     let actualSum = 0;

//     for (ele of array) {
//         actualSum += ele
//     }

//     let missingNumber = (expectedSum - actualSum)
//     return missingNumber
// };

// const myArray = [1, 2, 3, 4, 5, 7, 8, 9];
// const n = myArray.length + 1;
// const result = findMissingNumber(myArray, n);
// console.log(result);

// const findEvenNumber = (array) => {
//     if(array.length < 0){
//         return undefined
//     }

//     let evenNumber = [];

//     for(let i = 0; i< array.length; i++){
//         if(array[i] % 2 === 0){
//             evenNumber.push(array[i])
//         }
//     }
//     return evenNumber
// }

// const myArray = [1, 2, 3, 4, 5, 7, 8, 9];
//  const result = findEvenNumber(myArray);
//   console.log(result);

// const findOddNumber = (array) => {
//     if(array.length < 0){
//         return undefined
//     }

//     let oddNumber = [];

//     for(let i = 0; i< array.length; i++){
//         if(array[i] % 2 !== 0){
//             oddNumber.push(array[i])
//         }
//     }
//     return oddNumber
// }

// const myArray = [1, 2, 3, 4, 5, 7, 8, 9];
//  const result = findOddNumber(myArray);
//   console.log(result);