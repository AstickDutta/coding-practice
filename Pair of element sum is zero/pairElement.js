let findPairNumberZero = (arr) => {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        sum = arr[left] + arr[right]

        if (sum == 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}

const result = findPairNumberZero([-2, -3, -4, 1, 5, 2])
console.log(result)