let deleteElement = (array, position) => {
    if (position < 0 || position >= array.length) {
        console.log("Invalid position");
        return;
    }

    for (let i = position; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length--;

    return array;
}

let myArray = [1, 2, 3, 4, 5];
let deletionPosition = 4;
deleteElement(myArray, deletionPosition);
console.log("Modified array:", myArray); //Modified array: [ 1, 2, 3, 4 ] 

