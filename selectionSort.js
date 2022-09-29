const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {

        // 最小は一番左にあると仮定する
        let minIdx = i;

        // 最小のインデックス+1でループし、最小の値のインデックスを探す
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // 最小の値がインデックスiでない場合はminIdxが最小の値のインデックスなので、値をスワップする。
        if (i !== minIdx) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
        }
    }

    return arr;
}

const arr = [2, 1, 4, 6, 8, 3, 5, 7];

console.log(selectionSort(arr));