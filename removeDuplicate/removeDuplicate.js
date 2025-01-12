function removeDuplicateNum(array) {
    if (array.length === 0) return false;

    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[j] !== array[i]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1
}

let inputArray = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5];
let length = removeDuplicateNum(inputArray);

console.log(inputArray.slice(0, length));
