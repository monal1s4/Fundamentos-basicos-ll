function reemplazarUltimoConConteoPositivos(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }

    arr[arr.length - 1] = count;
    return arr;
}
const array = [-1, 1, 1, 1];
const resultado = reemplazarUltimoConConteoPositivos(array);
console.log(resultado);