function reemplazarPositivosPorBig(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }

    return arr;
}
const array = [-1, 3, 5, -5];
console.log(reemplazarPositivosPorBig(array)); 