const bubbleSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }

    }

    return arr
}

const arr = [2, 4, 6, 8, 3, 5, 7, 1];

console.log(bubbleSort(arr))
