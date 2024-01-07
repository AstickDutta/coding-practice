
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



const dublicateNumber = (array) => {
    const nonDublicate = new Set();
    const dublicate = [];

    for (ele of array) {
        if (nonDublicate.has(ele)) {
            dublicate.push(ele)
        } else {
            nonDublicate.add(ele)
        }
    }
    return dublicate
}

const myArray = [1, 2, 3, 4, 5, 6, 4, 5, 6, 7]
const result = dublicateNumber(myArray)
console.log(result)