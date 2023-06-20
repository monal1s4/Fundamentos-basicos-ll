function sumarUnoIndicesImpares(arr) {
    for (let i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
        console.log(arr[i]);
    }

    return arr;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultado = sumarUnoIndicesImpares(array);
console.log(resultado);