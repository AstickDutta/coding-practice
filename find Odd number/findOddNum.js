const findOddNumber = (array) => {
    if (array.length < 0) {
        return undefined
    }

    let oddNumber = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            oddNumber.push(array[i])
        }
    }
    return oddNumber
}

const myArray = [1, 9, 6, 8, 3, 1, 76, 45, 54, 33];
const result = findOddNumber(myArray);
console.log(result);