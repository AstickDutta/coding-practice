//Write a program that takes as input an array of numbers of length N and a number p (positions - p is greater than 0
//   and less than N) and a number d (direction - either 0 for left or 1 for right). The objective is to return the array
//   shifted by p positions in d direction.
//   Example: For an input array [1, 3, 2, 7, 4, 6] with p=3 and d=0
//   the expected result would be [7, 4, 6, 1, 3, 2] with the array shifted left by 3 positions.

function a (arr, d, n){
    let temp =  new Array(n)

    let f = 0
    for(let i = d; i<n; i++){   //O(n)
        temp[f] = arr[i]
        f++
    }

    for(let i =0; i<d; i++){
        temp[f] = arr[i]
        f++
    }

    for(let i =0; i<n; i++){
        console.log(temp[i])
    }
}

let arr = [1, 3, 2, 7, 4, 6]
let n = arr.length
let d = 3
a(arr, d, n)

//question??
// Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data:
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

//Answer
function a (input){
    if(typeof input === 'string'){
        return true
    }else return false

}
console.log(a(99))

//Question??
// Write a JavaScript function to check whether a string is blank or not.

// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

//Answer :
let k = function s(input){
    if( input == '' || typeof input === 'number' || input == ""){
        return false
    }else return true
  }
  console.log(k(null));

//Question??
// Write a JavaScript function to split a string and convert it into an array of words.

// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

//Answer:
let str = function (input){
    return input.trim().split(" ")

}
console.log(str("robin singh"))

//Question??
// Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

//Answer:
// let checkString = function (str,length){
//     if(typeof str === "string" && length >0){
//         return str.slice(0,length)
//     }
//     console.log(checkString("robindra",4))
// }

let checkString = function (str,length){
    if(typeof str === "string" && length >0){
        return str.slice(0,length)
    }
    console.log(checkString("robindra",4))
}
let res = checkString("robindra",4)
console.log(res)

// let checkString = function (str,length){
//     for(; str.length; i++){
//         if(typeof str === "string" && length >0){
//             return str.slice(0,length)
//         }
//     }
// }
//         console.log(checkString("robindra",4))

let checkeString = function (str,length){
    let x = ''
      for(; i<str.length; i++){
          if(typeof str === "string" && length > 0){
              x += str[i]
              length--
          }
      }
      return x
  }
          console.log(checkeString("robindra",3))

//Question?
// Write a JavaScript function to convert a string in abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

let strng = function (str) {
  let result = "";
  ;
  for (i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    } else break;
  }
  result += " " + str[++i] + ".";
  return result;
};
console.log(strng("Sourav Bauri"));

//questions?
// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

//answer:
let strng2 = function (str){
    result = ""

    for(let i = 0; i<str.length; i++){
       if(str[i] !== "_"){
            result += str[i]
        } else{ result += "..." ; break}
    }
    for(let i = 0; i<str.length; i++){
        if (str[i] == "@")
       break
}

for (let i = 0;i<str.length; i++){
    result+= str[i]
}
return result
}
console.log(strng2("sourav_bauri@gmail.com"))

let strng1 = function(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "_") {
      result += str[i];
    } else {
      result += "...";
      break;
    }

    if (str[i] === "@") {
      for (let j = i; j < str.length; j++) {
        result += str[j];
      }
      break;
    }
  }

  return result;
};

console.log(strng1("sourav_bauri@gmail.com"));

function protect_email(email) {
  let atIndex = -1;
  let dotIndex = -1;
  
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atIndex = i;
    } else if (email[i] === ".") {
      dotIndex = i;
    }
    
    if (atIndex !== -1 && dotIndex !== -1) {
      break;
    }
  }
  
  let username = "";
  for (let i = 0; i < atIndex; i++) {
    username += email[i];
  }
  
  let hiddenEmail = username.substring(0, 4) + "...@" + email.substring(atIndex + 1);
  
  return hiddenEmail;
}

console.log(protect_email("arindam_dan@gmail.com"));


// questions?
// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

let string_parameterize = function(str){
 let result = ""


    for(let i =0 ; i<str.length; i++){
        if(str[i] == " "){
           result +=  "-"
        }else result += str[i].toLowerCase()
    }
    return result
}
console.log(string_parameterize("Robin Singh from USA."))

//question?
// Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

//answer:
let capitalize = function(str){
           let str1 = ""
           str1 += str[0].toUpperCase()
           for(let i = 1; i<str.length; i++){
            str1 += str[i]
           }
            return str1
        }

console.log(capitalize('js string exercises'));

//questions?
// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// console.log(swapcase('AaBbc'));
// "aAbBC"

//answer:
// let capcase = function (str) {
//   let str1 = "";

//   for (let i = 0; i < str.length; i++) {

//     if (str[i] === str[i].toUpperCase()) {
//       str1 += str[i].toLowerCase();
//     } else if (str[i] === str[i].toLowerCase()) {
//       str1 += str[i].toUpperCase();
//     }
//   }
//   return str1;
// };
// console.log(capcase("shreya DuBey"));

// let capcase = function (str) {
//   let str1 = "";

//   for (let i = 0; i < str.length; i++) {
//     str1 += (str[i] === str[i].toUpperCase()) ? str[i].toLowerCase() : str[i].toUpperCase();
//   }

//   return str1;
// };

// console.log(capcase("shreya DuBey"));


// for (var i = 0; i < 3; i++) {

//     setTimeout(function() { alert(i); }, 1000 + i);

//   }

// (function() {

//     var a = b = 5;

//   })();

//   console.log(b);

// function StringChallenge(sen) {

//     // code goes here
//       const codewords = sen.split(" ");
//        let newword = "";
//        let max = 0;
//        for(let word of codewords){
//          const createword = word.replace(/[^a-zA-Z0-9]/gi,'');
//            if(createword.length>max){
//              newword = createword
//              max = createword.length
//            }
//        }
//        var token = "o8vpxlnyc7ad"
//        var histri = newword + token;
//         var d = histri.split("");
//         for(let i=3;i<d.length-1;i+=4){
//               d[i]= "_"
//               var arustr = d.join("");
//         }

//        return arustr;
//   }

//   // keep this function call here
//   console.log(StringChallenge(readline()));

//   function StringChallenge(str) {

//     // code goes here

//      var obj = {};
//      var newarr = [];
//      for(let i=0;i<str.length;i++){
//        obj[str[i]] = (obj[str[i]]||0)+1;
//      }
//          var f = Object.keys(obj);
//          var g = Object.values(obj);
//          for(let j=0;j<f.length;j++){
//            newarr.push(g[j]);
//            newarr.push(f[j]);
//          }
//          var token = "o8vpxlnyc7ad";
//          var dul = newarr.join("");
//          var nul = dul + token;
//          var d = nul.split("");
//          for(let k=3;k<d.length-1;k+=4){
//            d[k] = "_"
//            var a = d.join("")
//          }
//          return a;
//   }

//   // keep this function call here
//   console.log(StringChallenge(readline()));

//question?

// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "javaScriptExercises"
// "javaScriptExercises"
// "javaScriptExercises"

//answer

let camelize = function (str) {
  let result = "";
  result += str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] == " ") {
      result += str[++i].toUpperCase();
    } else result += str[i];
  }
  return result;
};
console.log(camelize("JavaScript exercises"));

//Question?

// Write a JavaScript function to uncamelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

//answer
let uncamelize = function (str, str1) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      if (str1 == undefined) {
        result += " " + str[i].toLowerCase();
      } else result += str1 + str[i].toLowerCase();
    } else result += str[i];
  }
  return result;
};
console.log(uncamelize("helloWorld", "_"));

//Question
// Write a JavaScript function to concatenates a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

//Answer
let repeat = function (str, n) {
  let result = "";

  if (n == 0 || n == undefined || n == 1) {
    return str;
  }
  for (let i = 1; i <= n; i++) {
    result += str;
  }
  return result;
};
console.log(repeat("Ha!", 3));

//Question?
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

//Answer:
let insert = function (str, str1, n) {
  let result = "";

  if (str1 == undefined) {
    return str;
  }
  if (n == undefined) {
    return (result = str1 + str);
  }
  for (let i = 0; i < n; i++) {
    result += str[i];
  }
  result += str1;

  for (let i = n; i < str.length; i++) {
    result += str[i];
  }
  return result;
};
console.log(insert("We are doing some exercises.",'JavaScript ',18));

const counter = (function() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    }
  }
})();

counter.increment();
console.log(counter.getCount()); // Output: 1


//Questions?

// Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.

// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

let humanize_format = function (n) {
  let last_dgit = n % 10;

  if (n == undefined) {
    return "please put the value of n";
  }

  if (last_dgit == 1) {
    return n + "st";
  }

  if (last_dgit == 2) {
    return n + "nd";
  }

  if (last_dgit == 3) {
    return n + "rd";
  }
  return n + "th";
};
console.log(humanize_format(657));

//reverse String with recursion
function  reverse (str){
    if(str.length<=1) return str
    return reverse(str.slice(1)) + str[0]
}
console.log(reverse("hello"))

let arr1 = [8,5,3,6,8,44,66,23,45]
arr1.sort(function(a,b){
    return (b - a)
})
console.log(arr1)

//binary_search.....

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 8, 9];
// target = 7

// const func = (arr, target) => {

//   let n = arr.length;
//   let low = 0;
//   let high = n - 1;
//   let mid;
//   let left0cc = -1;
//   let right0cc = -1;

//   while (low <= high) {
//     mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] == target) {
//       left0cc = mid;
//       high = mid - 1;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   while (low <= high) {
//     mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] == target) {
//       left0cc = mid;
//       low = mid + 1;
//     } else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   console.log(left0cc, right0cc)
// }
// func(arr, target)

// let arr = [8,9,1,2,3,4,5,7]
// target = 7

// const funcn = ( arr, target ) => {
//     let n = arr.length;
//     let low = 0;
//     let high = n - 1;
//     let mid;

//     while(low <= high){

//         //[8,9,1,2,3,4,5,7] , target = 3

//         mid = Math.floor( low + ( high - low ) / 2); //0 +(0+7)/2 = 3.5 = 3 index = 2

//         if(arr[mid] == target)
//             return mid;

//         else if(arr[low] <= arr[mid])
//             {
//                 if(target < arr[mid] && target >= arr[low])
//                 {
//                     high = mid - 1;

//                 }
//                 else
//                 {
//                     low = mid + 1; //4
//                 }
//             }

//         else if(arr[mid] <= arr[high])
//             {
//                 if(target > arr[mid] && target <= arr[high])
//                 {
//                     low = mid + 1

//                 }
//                 else
//                 {
//                     high = mid - 1;
//                 }
//             }
//     }

//     return -1
// }

// console.log(funcn(arr, target))

// let arr2 = [1,4,5,6,7,7,7,8,9,9];
// let target2 = 3
// //-1,-1

// let arr3 = [1,4,5,6,7,8,9,9];
// let target3 = 7
// //4,4

// let arr = [1,4,5,6,7,7,7,7,7,7,8,9,9]; //12
// let target = 7
//4,6

// const func = (arr, target) => {
//     let n = arr.length;
//     let low = 0;
//     let high = n-1;
//     let mid;
//     let leftOcc = -1;
//     let rightOcc = -1;
//     //  0,1,2,3,4,5,6,7,8,9,10,11,12
//     // [1,4,5,6,7,7,7,7,7,7,8,9,9]
//     while(low <= high){
//         mid = Math.floor(low+(high-low)/2); // 6

//         if(arr[mid] == target)
//          {
//              leftOcc = mid;
//              high = mid - 1; //3
//          }

//         else if(arr[mid] < target)
//         {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }

//     low = 0;
//     high = n - 1;

//     while(low <= high){
//         mid = Math.floor(low + (high - low) / 2); //0+(3-0)/2 = 1.5

//         if(arr[mid] == target)
//          {
//              rightOcc = mid;
//              low = mid + 1; //2
//          }

//         else if(arr[mid] < target)
//         {
//             low = mid + 1;
//         }
//         else {
//             high = mid - 1;
//         }
//     }

//     console.log(leftOcc, rightOcc);
// }
// func(arr, target)

// let arr = [1,2,3,4,5,5,6,7];
// let target = 6;

// const func = (arr, target) => {
//     let low = 0;
//     let high = arr.length -1;
//     let mid;

//      while(low <= high){
//             mid = Math.floor(low + (high - low) / 2); //3

//             if(arr[mid] == target)
//              {
//                  return mid;
//              }

//             else if(arr[mid] < target)
//             {
//                 low = mid + 1;  //mid index 6
//             }
//             else {
//                 high = mid - 1;
//             }
//         }
// }

//     console.log (func (arr, target))

// //Maximum Sum Subarray of Size K, Applying Sliding Window pattern

// let maxS = function (arr, k) {
//   let max = 0;
//   let winsum = 0;
//   let winstart = 0;
//   for (let i = 0; i < arr.length; i++) {
//     winsum += arr[i];
//     if (i >= k - 1) {
//       max = Math.max(winsum, max);
//       winsum -= arr[winstart];
//       winstart++;
//     }
//     //console.log(windowSum,max);
//   }
//   return max;
// };
// console.log(maxS([2, 3, 4, 5, 6, 9, 8], 3));

//brute_force
// let maxS = function(arr,k){
//     let max = 0;
//     for(let i=0;i<arr.length-k+1;i++){
//       let tempMax = 0;
//       for(let j=i;j<i+k;j++){
//         tempMax += arr[j];
//       }
//       if(tempMax > max){
//         max = tempMax;
//       }
//     }
//     return max;
//   };
// console.log(maxS([2, 3, 4, 5, 6, 7, 8], 3));

// function maxsumsubarray(arr, k) {

//   let currsum = 0;
//   let maxsum = 0;
//   for (let i = 0; i < k; i++) {
//     currsum = currsum + arr[i];
//   }
//   maxsum = currsum;
//   for (let i = k; i < arr.length; i++) {
//     currsum = currsum + arr[i];
//     currsum = currsum - arr[i - k];
//     maxsum = Math.max(maxsum, currsum);
//   }
//   return maxsum;
// }
// console.log(maxsumsubarray([10, 20, 30, 40, 50, 60, 70, 90], 4)); //it will work for sorted array

// function printKMax(arr, n, k) {
//   let str = "";

//   let Qi = [];

//   let i;
//   for (i = 0; i < k; ++i) {
//     while (Qi.length != 0 && arr[i] >= arr[Qi[Qi.length - 1]])
//       // Remove from rear
//       Qi.pop();

//     Qi.push(i);
//   }

//   for (i; i < n; ++i) {
//     str += arr[Qi[0]] + " ";

//     while (Qi.length != 0 && Qi[0] <= i - k)
//       // Remove from front of queue
//       Qi.shift();

//     while (Qi.length != 0 && arr[i] >= arr[Qi[Qi.length - 1]]) Qi.pop();

//     Qi.push(i);
//   }

//   str += arr[Qi[0]];
//   console.log(str);
// }

// let arr = [12, 1, 78, 90, 57, 89, 56];
// let n = arr.length;
// let k = 3;
// printKMax(arr, n, k);

//multiple pointers methode
//find the first pair whose sum is zero
// function ari(arr) {
//   let j = arr.length - 1;
//   let i = 0;
//   while (i < j) {
//     if (arr[i] + arr[j] == 0) return `${arr[i]} , ${arr[j]}`;
//     else if (arr[i] + arr[j] < 0) i++;
//     else if (arr[i] + arr[j] > 0) j--;
//   }
//   return false;
// }
// let result = ari([-5, 5,-3, 3, 4, 7]);
// console.log(result);

// //find the two elements wholse sum is exactly x
// function wholesumarray(arr, x) {
//   arr.sort((a, b) => a - b);
//   console.log(arr); //o(nlogn)
//   let j = arr.length - 1;
//   let i = 0;
//   while (i < j) {
//     //o👎
//     if (arr[i] + arr[j] == x) return `${arr[i]} , ${arr[j]}`;
//     else if (arr[i] + arr[j] < x) i++;
//     else if (arr[i] + arr[j] > x) j--;
//   }
//   return false;
// }
// var result = wholesumarray([1, 4, 45, 6, 10, 8], 18);
// console.log(result);

// // find the sums that closes to 55
// function closesum(del) {
//     let result = [];
//     var sum = Number.MAX_VALUE;
//     var x = 55;
//     var i = 0;
//     var j = del.length-1;
//     while(i<j) {
//       var pair = Math.abs(del[i]+del[j]-x)
//          if( pair<sum) {
//           result = [del[i],del[j]];
//              sum = pair;
//          }
//          else if(del[i]+del[j]>x)  j--;
//          else if(del[i]+del[j]<x) i++;
//     }
//     return result;
//     }
//     const newresult = closesum([10,22,28,29,30,40])
//     console.log(newresult)

// let max = function(arr, k){
//   a1 = 0
//   a2 = 0
//   for(let i = 0; i<k; i++){
//     a1 = a1 + arr[i]
//   }
//   a2 = a1
//   for(let i = k; i<arr.length; i++){
//     a1 = a1 + arr[i]
//     a1 = a1 - arr[i-k]
//     max1 = Math.max(a1,a2)
//   }
//   return  max1
// }
// console.log(max([1,2,3,4,10,6],2))

// let sub =  function(arr,k){
//   let max = -Infinity
//   let array = []
//   for(let i = 0; i<k; i++){
//     max = Math.max(max,arr[i])
//   }
//   array.push(max)

//   for(let j = k; j<arr.length; j++){
//     max = Math.max(max,arr[j])
//     array.push(max)
//   }
//   return array
// }
// console.log(sub([-1,-3,-4,1,2,3,4,5],3))

// let zero = function(arr){
//   j = arr.length-1
//   i = 0;
//   while(i<j){
//     if (arr[i]  + arr[j] ==0) return `${arr[i]},${arr[j]}`

//   else if(arr[i] + arr[j] < 0) i++

//   else if(arr[i] + arr[j] > 0) j--

//   }
//   return false

//   }
//   console.log(zero([-5,2,3,4,6,5]))

// function ari(arr) {
//   let j = arr.length-1;
// let i = 0;
// while(i<j){
//   if(arr[i]+arr[j]==0)  return (`${arr[i]} , ${arr[j]}`);
//   else if(arr[i]+arr[j]<0) i++;
//   else if(arr[i]+arr[j]>0) j--;
// }
// return false;
// }
// var result = ari([-5,-3,0,1,4,7]);
// console.log(result);

//merge..sort

// function mergearr(left, right){
//   let i = 0;
//   let j = 0;
//   let res = [];
//   while(i<left.length && j<right.length){
//       if(left[i]<=right[j]){
//         res.push(left[i]);
//         i++;
//       }else {
//         res.push(right[j]);
//         j++;
//       }
//   }
//    while(i<left.length){
//         res.push(left[i]);
//         i++;
//    }
//    while(j<right.length){
//     res.push(right[j]);
//     j++;
//    }
//    return res;
// }
// function botharray(arr){
//     if(arr.length<2) return arr;
//     let mid = Math.floor(arr.length/2);

//     let left = botharray(arr.slice(0,mid));
//     let right = botharray(arr.slice(mid));
//     return mergearr(left,right);
// }

// // let left = [1,2,3,4,5,6,8,9];
// // let right = [3,4,5,6,7];
// // console.log(mergearr(left,right));
// let arr = [90,38,47,18,56,4,2,9]
// console.log(botharray(arr));

// function binaryarr( arr ,target){
//   let low = 0;
//   let high = arr.length -1;
//   let mid;

//    while(low<=high){
//           mid = Math.floor(low+(high-low)/2);

//           if(arr[mid] == target)
//            {
//                return mid;
//            }

//           else if(arr[mid] < target)
//           {
//               low = mid+1;
//           }
//           else {
//               high = mid -1;
//           }
//       }
//   }
// console.log(binaryarr([1,2,3,4,5,5,6,7],2))

// let arr = [1,2,3,4,5,6,6,6,6,6,7]
// let target = 6

// function binary_search(arr,target){
//   let start = 0;
//   let end = arr.length-1
//   let mid;

// //   while(start<end){
// //     mid = Math.floor((start+(end-start)/2))

// //     if(arr[mid]==target){
// //       return mid

// //     }else if(arr[mid]<target){
// //       start = mid+1
// //     }else{
// //     end = mid-1
// //     }
// //   }
// //   return mid
// // }
//  console.log(binary_search(arr,target))

// let arr = [1, 2, 3, 4, 5, 5, 5, 5, 6, 7, 8];
// let target = 5;

// function firstLast_search(arr, target) {
//   let start = 0;
//   let end = arr.length - 1;
//   let mid;
//   let FristOcc = -1;
//   let lastOcc = -1;

//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2);

//     if (arr[mid] == target) {
//       FristOcc = mid;
//       end = mid - 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   start = 0;
//   end = arr.length - 1;

//   while (start <= end) {
//     mid = Math.floor(start + (end - start) / 2);

//     if (arr[mid] == target) {
//       lastOcc = mid;
//       start = mid + 1;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return [FristOcc, lastOcc];
// }
// console.log(firstLast_search(arr, target));

//.........................find minimum ele from rotated array....................

// let findMin = function (nums) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor(left + (right - left) / 2);

//     if (nums[mid] > nums[right]) left = mid + 1;
//     else right = mid;
//   }
//   return nums[left];
// };
// console.log(findMin([3, 4, 5, 1, 2]));

// let arr = [2, 5, 7, 1, 9, 3, 15, 25, 23, 11, 25]

//quickSort algo

// function swap(arr, left, right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;
// }

// function partition(arr, low, high) {
//   let pivot_element = arr[high];
//   let i = low - 1;

//   for (let j = low; j < high; j++) {
//     if (pivot_element > arr[j]) {
//       i++;
//       swap(arr, i, j);
//     }
//   }
//   swap(arr, i + 1, high);
//   return i + 1;
// }

// function quickSort(arr, low, high) {
//   if (low < high) {
//     let pivot_index = partition(arr, low, high);
//     quickSort(arr, low, pivot_index - 1);
//     quickSort(arr, pivot_index + 1, high);
//   }
//   return arr;
// }
// console.log(quickSort(arr, 0, 10));
//nlogn

// JavaScript code for kth smallest
// element in an array

// Standard partition process of QuickSort.
// It considers the last element as pivot
// and moves all smaller element to left of
// it and greater elements to right

// function partition( arr , l , r)
// {
//     var x = arr[r], i = l;
//     for (j = l; j <= r - 1; j++) {
//         if (arr[j] <= x) {
//             // Swapping arr[i] and arr[j]
//             var temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;

//             i++;
//         }
//     }

//     // Swapping arr[i] and arr[r]
//     var temp = arr[i];
//     arr[i] = arr[r];
//     arr[r] = temp;

//     return i;
// }

// // This function returns k'th smallest element
// // in arr[l..r] using QuickSort based method.
// // ASSUMPTION: ALL ELEMENTS IN ARR ARE DISTINCT
// function kthSmallest( arr , l , r , k) {
//     // If k is smaller than number of elements
//     // in array
//     if (k > 0 && k <= r - l + 1) {
//         // Partition the array around last
//         // element and get position of pivot
//         // element in sorted array
//         var pos = partition(arr, l, r);

//         // If position is same as k
//         if (pos - l == k - 1)
//             return arr[pos];

//         // If position is more, recur for
//         // left subarray
//         if (pos - l > k - 1)
//             return kthSmallest(arr, l, pos - 1, k);

//         // Else recur for right subarray
//         return kthSmallest(arr, pos + 1, r,
//         k - pos + l - 1);
//     }

//     // If k is more than number of elements
//     // in array
//     return Number.MAX_VALUE;
// }

// // Driver program to test above methods

//     var arr = [ 12, 3, 5, 7, 4, 19, 26 ];
//     var k = 3;
//     console.log ("K'th smallest element is " + kthSmallest(arr, 0, arr.length - 1, k));

//insertionSort....
// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       let key = arr[i];
//       for (var j = i - 1; j >= 0 && arr[j] > key; j--) {
//         arr[j + 1] = arr[j];
//       }
//       arr[j + 1] = key;

//     }
//     return arr
//   }
//   console.log(insertionSort([2,3,5,44,34,24]))

//     let arr = [5, 2, 7, 2, 9, 6, 2, 11, 4];

// const swap = (arr, left, right) => {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
// }
// const partition = (arr, low, high) => {
//     pivot_element = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {

//         if (pivot_element > arr[j]) {

//             i++;
//             swap(arr, i, j);
//         }
//     }
//     swap(arr, i + 1, high);
//     return i + 1;
// }
// const quickSort = (arr, low, high,k) => {
//     if (low < high) {
//         let pivot_index = partition(arr, low, high);
//         quickSort(arr, low, pivot_index - 1);
//         quickSort(arr, pivot_index + 1, high);
//         return arr[k-1]
//     }
// }

// console.log(quickSort(arr, 0, 8,8));

//Palindrome two pointer.

// let isPalindrome = function (S) {
//   let start = 0;
//   let end = S.length - 1;

//   if (S.length === 1) {
//     return 1;
//   }
//   let result = true;

//   while (start < end) {
//     if (S[start] !== S[end]) {
//       result = false;
//     }
//     start++;
//     end--;
//   }
//   return result;
// };

// console.log(isPalindrome("mow"));

//pair defferenc k
// let arr = [78, 9, 12, 10, 2]
// let k = 10
// function find(arr, k) {
//   arr.sort((a, b) => { return b-a })
//   let i = 0
//   let j = arr.length - 1
//   while (i < j) {
//     if (arr[i] - arr[j] == k) {
//       return [arr[i], arr[j]]
//     } else if (arr[i] - arr[j] > k) {
//       i++
//     } else {
//       j--
//     }
//   }
//   return false
// }
// console.log(find(arr,k))

// find the four elements sum is exactly x
// function foursumarray(arr,x){
//     arr.sort((a,b)=>a-b);  //o(nlogn)
//     for(let i=0;i<arr.length-3;i++){
//      for(let j=i+1;j<arr.length-2;j++){
//        var first = i+2;
//        var last = arr.length-1;
//        while(first<last){
//          var current = arr[i]+arr[j]+arr[first]+arr[last];
//          if(current == x) return (`${arr[i]},${arr[j]},${arr[first]},${arr[last]}`);
//          else if(current<x) first++;
//          else if(current>x) last--;
//        }
//      }
//     }
//     return false;
//  }
// console.log(foursumarray([1,20,4,6,10,8],31));

// let arr1 = [8, 9, 1, 2, 3, 4, 5, 7]; //sorted array after rotation
// let target = 5;
// // There is an integer array nums sorted in ascending order (with distinct values).

// const func = (arr, target) => {
//   let n = arr.length;
//   let low = 0;
//   let high = n - 1;
//   let mid;
//   while (low <= high) {
//     //[8,9,10,11,12,13,14,15,1,2,3,4,5,7] , target = 3
//     mid = Math.floor(low + (high - low) / 2);

//     if (arr[mid] == target) return mid;

//     else if (arr[low] <= arr[mid]) {
//       if (target < arr[mid] && target >= arr[low]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     } else if (arr[mid] <= arr[high]) {
//       if (target > arr[mid] && target <= arr[high]) {
//         low = mid + 1;
//       } else {
//         high = mid - 1;
//       }
//     }
//   }

//   return -1; //target is not present in array
// };

// console.log(func(arr1, target));

//find the longest common prefix string amongst an array of strings

// var longestCommonPrefix = function(strs) {
//     // if array is empty, return a prefix of empty string
//     if (strs.length === 0) {return ""}
//     // if array has 1 word, return the whole word
//     if (strs.length === 1) {return strs[0]}

//     // set a variable prefix equal to empty string
//     let prefix = ""
//     // iterate through the letters of the first word
//     for (let i = 0; i < strs[0].length; i++) {
//     // compare those letters to same Index-ed letter of other words
//         for (let j = 1; j < strs.length; j++) {
//         // if the letters match, continue to next set of letters;
//         // but if the letters don't match, return prefix
//         // for the inside for loop (currently an empty string)
//             if (strs[j][i] === strs[0][i]) {
//                 continue
//             } else {
//                 return prefix
//             }
//         }
//     // After inside for loop completes OR Breaks because the letters
//     // no longer match, the index in the first word will mark where
//     // the longest common prefix is, so we add to our empty string
//         prefix += strs[0][i]
//     }

//     return prefix
// };

// var longestCommonPrefix = function(strs) {
//     let sortedArray = strs.sort()
//     let firstString = sortedArray[0]
//     let lastString = sortedArray[sortedArray.length-1]
//     let pointer = 0;
//     let longestCP = "";
//     while(pointer <= firstString.length-1){
//         if(firstString[pointer] !== lastString[pointer]){
//             break;
//         }
//         longestCP += firstString[pointer++];
//     }
//     return longestCP;
// };

// console.log(longestCommonPrefix["ass", "asss", "asssss"])

// var longestCommonPrefix = function(str) {

//     if(str.length == 0){
//         return ""
//     }
//     if(str.length == 1){
//         return str[0]
//     }
//     let i =0
//     str.sort()
//     let end = str[0].length
//     while(i<end && str[0][i]==str[str.length-1][i])
//         i++
//         let store = str[0].substring(0,i)
//     return store

// }

// console.log(longestCommonPrefix(["low", "jower", "kuter"]))

// var charRepeats = function(str) {
//     for(var i = 0; i <= str.length; i++) {
//         for(var j = i+1; j <= str.length; j++) {
//             if(str[j] == str[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// console.log(charRepeats("ast"))

// var example = 'hello';

// var charRepeats = function(str) {
//     for (var i=0; i<str.length; i++) {
//       if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
//         return false; // repeats
//       }
//     }
//   return true;
// }
// function charRepeats(s) {
//     var r = {},
//       i, x;
//     for (i = 0; i < s.length; i++) {
//       x = s[i];
//       if (r[x])
//         return false;
//       r[x] = true;
//     }
//     return true;
//   }

// console.log( charRepeats("hello") );

// var findDuplicate = function(nums) {
//     let mp = new Map()
//     for(let i=0; i<nums.length; i++){
//         let x = nums[i]
//         if(mp.has(x)){
//             mp.set(x, mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     let ans = []
//     mp.forEach((value,key) => {
//         if(value>1){
//             ans.push(key)
//         }
//     })
//     return ans
// };
// console.log(findDuplicate("strring"))

//check Anagram

// function isAnagram(a, b) {
//     let obj = {};
//     if (a.length !== b.length) {
//       return false;
//     }
//     for ( ch of a) {
//       obj[ch] = (obj[ch] || 0) + 1;
//     }
//     for (ch of b) {
//       if (!obj[ch]) {
//         return false;
//       }
//       obj[ch]--;
//     }
//     return true
//   }
//   console.log(isAnagram("cat","tac"))

//pairs sum equal to given num
// var sum = (arr, target) => {
//     let s = 0,
//       e = arr.length - 1;
//     while (s < e) {
//       const sum = arr[s] + arr[e];
//       if (sum == target) return [arr[s], arr[e]];
//       else if (sum > target) {
//         e--;
//       } else {
//         s++;
//       }
//     }
//   };

//   console.warn(sum([1,2, 7, 8,11, 15],9));

// var rotateString = function(A, B) {
//     if(A === B) {
//         return true
//     }

//     let count = A.length
//     const arrA = A.split('')

//     while(count) {
//         const shiftedItem = arrA.shift()
//         arrA.push(shiftedItem)

//         if(arrA.join('') === B) {
//             return true
//         }

//         count--
//     }

//     return false
// };

//first Missing Positive
// var firstMissingPositive = function(nums) {

//     var possible = [];
//     for (var i = 0; i < nums.length + 2; i++) {
//       possible.push(i);
//     }

//     for (var i = 0; i < nums.length; i++) {
//       var number = nums[i];
//       if (number <= nums.length && number > 0) {
//         possible[number] = -1;
//       }
//     }

//     for (var i = 0; i < possible.length; i++) {
//       if (possible[i] > 0) {
//         return possible[i]
//       }
//     }

//   };

// var longestPalindrome = function(string) {
//     var length = string. length;
//     var result = "";
//     var centeredPalindrome = function(left, right) {
//         while (left >= 0 && right < length && string[left] === string[right]) { //expand in each direction. left--; right++; } return string.
//     ...

// var longestPalindrome = function(string) {

//     var length = string.length;
//     var result = "";

//     var centeredPalindrome = function(left, right) {
//       while (left >= 0 && right < length && string[left] === string[right]) {
//         //expand in each direction.
//         left--;
//         right++;
//       }

//       return string.slice(left + 1, right);
//     }
// }

// console.log(centeredPalindrome())

// function findSecondLargest(a, n) {
//   /*
//     First, sort the array and find the first_largest element present in the array (at the last position).
//     */
//   a.sort();

//   /*
//     Now for the second_largest element, we need to start from second last element as the largest element is at last.
//     */
//   let second_largest = 0;
//   /*
//     If the last and second last element are equal then check the previous one else return the second last element.
//     */
//   for (let i = n - 2; i >= 0; i--) {
//     if (a[i] != a[n - 1]) {
//       second_largest = a[i];
//       break;
//     }
//   }

//   return second_largest;
// }

// const a = [12, 35, 1, 10, 34, 1];
// let n = a.length;
// let answer = findSecondLargest(a, n);
// console.log("The second largest element in the array is: " + answer);

// function nextBiggest(arr) {

//     let max = -Infinity, result = -Infinity;

//     for (const value of arr) {
//       const nr = Number(value)

//       if (nr > max) {
//         [result, max] = [max, nr] // save previous max
//       } else if (nr < max && nr > result) {
//         result = nr; // new second biggest
//       }
//     }

//     return result;
//   }

//   const arr = ['20','120','2222','111', '112', '200', '333']
//   console.log(nextBiggest(arr))

// find sum 0

// function findNumberZero(arr){
//   let left = 0
//   let right = arr.length-1

//   while(left<right){
//     sum = arr[left] + arr[right]

//     if(sum == 0){
//       return [arr[left], arr[right]];
//     }else if(sum>0){
//       right--
//     }else{
//       left++
//     }
//   }
// }

// const result = findNumberZero( [-2,-3,-4,1,5,2])
// console.log(result)

// function findSumPairZero(array){ // i j
//   let left = 0; //[-5,-4,-3,-2,0,2,4,6,8]
//   let right = array.length-1;
//   while(left<right){
//   sum = array[left] + array[right];
//   if(sum === 0){
//   return[array[left],array[right]];
//   }else if(sum>0){
//   right--;
//   }else{
//   left++
//   }
//   }
//   }
//   const result = findSumPairZero([-5,-4,-3,-2,0,2,4,6,8])
//   console.log(result);

// Find All prime numbers in the range of [1,n],

// Solution:

// The most efficient way of find the prime numbers is using Sieve of Erathosthenes.

// let countPrimes = function(n) {
//     let seen = new Array(n+1).fill(0); // [1,2,3,4,5]
//     let ans = 0;
//     let primes = [];

//     for (let num = 2; num <= n; num++) {
//         if (seen[num]) continue
//         ans++
//         primes.push(num);
//         for (let mult = num * 2; mult <= n; mult += num){
//             seen[mult] = 1
//         }
//         }

//     return primes
// };
// const result = countPrimes([5])
// console.log(result);

//(nloglogn) //guss

// var countPrimes = function(n) {
//     let seen = new Array(n+1).fill(0);
//     let ans = 0;
//     let primes = [];
//     let sum = 0
//     for (let num = 2; num <= n; num++) {
//         if (seen[num]) continue
//         ans++
//         primes.push(num);
//         for (let mult = num * 2; mult <= n; mult += num)
//             seen[mult] = 1
//         }
//         for(let i = 0; i<primes.length; i++){
//            sum += primes[i]
//         }
//     return sum
// };
// const result = countPrimes([5])
// console.log(result);

// var search = function(nums, target) {
//     let n = nums.length;

//     let low = 0;
//     let high = n-1;

//     //which part of given window is sorted
//     //does our target exist in that window
//     while(low<=high){

//         let mid = low + Math.floor((high-low)/2);

//         if(nums[mid] == target)
//             return mid;

//         else if(nums[low] <= nums[mid])
//             {
//                 if(target<nums[mid] && target>= nums[low])
//                     high = mid-1;
//                 else
//                     low = mid+1;
//             }

//         else{
//             if(target <= nums[high] && target >nums[mid])
//                  low = mid+1;
//             else
//                 high = mid-1;
//         }
//     }

//     //TC: O(logn)
//     //SC: O(1)

//     return -1; //if you have to come out of binary search loop , which means answer does not exist
//  };

// let str = "astick dutta";
// let ide = -1
// let f = ' '

// for(let i of str){
//     if(str.split(i).length -1 ===1){
//         f = i;
//         console.log(f)
//     break
//     }else{
//         ide +=1
//     }
// }

// if (ide === 1){
//     console.log("all charecters are reapting or str in empty")
// }else{
//     console.log(`first non reapting charecter is ${f}`)
//}

// function isPrime(num) {
//     // Check if number is less than 2
//     if (num < 2) {
//       return false;
//     }
//     // Check if number is equal to 2
//     if (num === 2) {
//       return true;
//     }
//     // Check if number is even
//     if (num % 2 === 0) {
//       return false;
//     }

//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       if (num % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   // Example usage
//   console.log(isPrime(5));
//   console.log(isPrime(10));

//   function isPrime(n){
//    if (n < 2) return false

//    if (n==2 ) return true

//    for(let i = 2; i<n; i++){
//     if(n%i == 0) return false
//    }
//    return true
//   }

//   console.log(isPrime(4))

//   function getNextPrime(num) {
//     if (num < 2) {
//       return 2;
//     }

//     let isPrime = false;

//     while (!isPrime) {
//       num++;
//       isPrime = true;
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
//     }

//     return num;
//   }
//   console.log(getNextPrime(5))

// function prime(n) {
//   let arr = [];
//   let i = 2;
//   for (; i < n.length; i++) {
//     if (n % i !== 0) {
//         arr.push(n);
//     }
//   }
//   return arr
// }

// console.log(prime(10));

// function findPrimes(n) {
//     let primes = [];

//     for (let i = 2; i <= n; i++) {
//       let isPrime = true;

//       for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//           isPrime = false;
//           break;
//         }
//       }

//       if (isPrime) {
//         primes.push(i);
//       }
//     }
//     return primes;
//   }

//   console.log(findPrimes(10));

// function sumOddFibonacciNumbers(num) {
//     let a = 1;
//     let b = 1;
//     let sum = 1;

//     for (let i = 3; i <= num; i++) {
//       let c = a + b;
//       if (c > num) {
//         break;
//       }
//       if (c % 2 !== 0) {
//         sum += c;
//       }
//       a = b;
//       b = c;
//     }
//     return sum;
//   }
//   console.log(sumOddFibonacciNumbers(10)); // Output: 10 (1 + 1 + 3 + 5)

// function sumOddFibonacciNumbers(num) {
//   let a = 1;
//   let b = 1;
//   let sum = 0;

//   while (b <= num) {
//     if (b % 2 !== 0) {
//       sum += b;
//     }
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }

//   return sum;
// }

// Example usage
//console.log(sumOddFibonacciNumbers(10)); // Output: 10 (1 + 1 + 3 + 5)

// function fibonacci(n){
//   let a =  0
//   let b = 1
//   let arr = []
//   let sum = a+b
//   arr.push(sum)

//   for(let i = 0; i<=n; i++){
//     let temp = a+b
//     a = b
//     b = temp
//     arr.push(temp)
//   }
//   return arr
// }

// console.log(fibonacci(10))

//   let countPrimes = function(n) {
//     let seen = new Array(n+1).fill(0); // [1,2,3,4,5]
//     let ans = 0;
//     let primes = [];

//     for (let num = 2; num <= n; num++) {
//         if (seen[num]) continue
//         ans++
//         primes.push(num);
//         for (let mult = num * 2; mult <= n; mult += num){
//             seen[mult] = 1
//         }
//         }

//     return primes
// };
// const result = countPrimes([5])
// console.log(result);

// function countsprime(n){
//   let seen = new Array(n+1).fill(0)
//   let ans = 0
//   let prime = []
//   let sum = 0

//   for(let i = 2; i<=n; i++){
//     if(seen[i]) continue
//     ans++
//     prime.push(i)
//     for(let multiple = i*2; multiple<n; multiple+=i)
//       seen[multiple] = 1
//     }
//     for(let k = 0; k<prime.length; k++){
//       sum+=prime[k]
//   }
//   return[ prime, sum]
// }

// console.log(countsprime(5))

//sort the number and then remove the dublicatenumber

// function quickSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }

//   const pivot = array[Math.floor(array.length / 2)];
//   const left = [];
//   const right = [];

//   for (let i = 0; i < array.length; i++) {
//     if (i === Math.floor(array.length / 2)) {
//       continue;
//     }

//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// function removeDublicates(array) {
//   return [...new Set(array)];
// }

// function shortTheArrayAndRemoveTherDublicates(array) {
//   const sortingarray = quickSort(array);
//   const shortendArr = sortingarray.slice();
//   return removeDublicates(shortendArr);
// }

// const array = [4, 32, 5, 1, 6, 78, 4];
// const shortendArrUnquiqueNum = shortTheArrayAndRemoveTherDublicates(array);
// console.log(shortendArrUnquiqueNum);

//o(logn)
//o(nlogn)

//reverse string

// function reverseString(str){
// let string = ""
// for(let i = str.length-1; i>=0; i--){
// string+= str[i]
// }
// return string

// }
// console.log(reverseString("oouulaaa"))

// //fibonacci Number series

// function fibonacciNumber(n){
//   let fibo = [0,1];
//   for(let i = 2; i<= n; i++){
//     fibo.push(fibo[i-1] + fibo[i-2]);
//   }
//   return fibo
// }

// console.log(fibonacciNumber(7))

// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib.push(fib[i-1] + fib[i-2]);
//   }
//   return fib;
// }

// console.log(fibonacci(7));
// function fibonacci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i-1] + fib[i-2];
//   }
//   return n == 0 ? [] : n == 1 ? [0] : fib;
// }

// console.log(fibonacci(7));

// function fubonacci (n){

//     var a = 0, b = 1, f = 1;
//     for(var i = 2; i <= n; i++) {
//         f = a + b;
//         a = b;
//         b = f;
//     }
//     return f;
// };

// console.log(fubonacci(10))
// function fibonacciNumber(n){
//   let fibo = [0,1];
//   for(let i = 2; i< n; i++){
//     fibo.push(fibo[i-1] + fibo[i-2]);
//   }
//   return fibo
// }

// console.log(fibonacciNumber(7))

//basic questions

//Write a function that takes two numbers as arguments and returns their sum.

// function addNumbers(a,b){
//   return a+b
// }
// console.log(addNumbers(2,3))

// Write a program that prints out the numbers from 1 to 100.
// But for multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// function fizzbuzz (n){

//   let ans = []
//   for(let i = 1; i<=n; i++){
//     if((i%3 === 0) && (i%5===0)){
//      ans.push("fizzbuzz")
//     }else if(i%3 === 0){
//       ans.push("fizz")
//     }else if(i%5===0){
//       ans.push("buzz")
//     }else{ans.push((i+""))
//   }
//   }
//   return ans
// }

// console.log(fizzbuzz(100))

//Write a function that takes an array of numbers and returns the highest number in the array.

// let numbers = [1,2,3,4,5,100000]

// function maxNumbers(numbers){
//   return Math.max(...numbers)
// }
// console.log(maxNumbers(numbers))

// let numbers = [1,2,3,4,5,100000]

// function maxNumber(numbers) {
//   let max = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i];
//     }
//   }

//   return max;
// }

// console.log(maxNumber(numbers))

//Write a function that prompts the user to enter a number and then returns whether that number is even or odd.

// function isEvenOrOdd(number){

//   if(number % 2 === 0){
//     return `${number} is even`
//   }else{
//     return `${number} is odd`
//   }
// }

// console.log(isEvenOrOdd(9))

//Write a function that takes a string as input and returns the reverse of that string.

// function reverseString(str) {
//   let reverse = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// }

// console.log(reverseString("hello"));


//Write a function that takes an array of strings and returns a new array with all the strings capitalized.

// function capitalString(str){
//   let capitalized = []

//   for(let i = 0 ; i<str.length; i++){
//     capitalized.push(str[i].toUpperCase())
//   }
//   return capitalized
// }

// function capitalizeStrings(strings) {
//   let capitalized = [];
//   for (let i = 0; i < strings.length; i++) {
//     capitalized.push(strings[i].toUpperCase());
//   }
//   return capitalized;
// }

// console.log(capitalizeStrings("hello"))

// function reverseString(str) {
//   let reversedStr = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return reversedStr;
// }

// console.log(reverseString("hello"))

// function twoSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// let nums = [2,4,3,5,6,7]
// let target = 7


// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let currentSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

// console.log(maxSubArray([4,1,7,3]))

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);

  }

  return maxSum;
}

console.log(maxSubArray([1, -2, 3, 4, -1, 2, 1, -5, 4]));