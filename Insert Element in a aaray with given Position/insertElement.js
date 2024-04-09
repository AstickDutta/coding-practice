let insertElement = (array, element, position) => {
    if (position < 0 || position > array.length) {
        console.log("Invalid position");
        return;
    }

    for (let i = array.length - 1; i >= position; i--) {
        array[i + 1] = array[i];
    }

    array[position] = element;

    return array;
}

let myArray = [1, 2, 3, 4, 5];
let elementToInsert = 10;
let insertionPosition = 3;
insertElement(myArray, elementToInsert, insertionPosition);
console.log("Modified array:", myArray);