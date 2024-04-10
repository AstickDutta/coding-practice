let factorial = (n) => {

    if (n === 0) {
        return 1;
    } 
    else {
        return n * factorial(n - 1);
    }
}

let value = 5;
let result = factorial(value);
console.log(`Factorial of ${value} is:`, result);
