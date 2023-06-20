function escalaArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }

    return arr;
}
const array = [1, 2, 3];
const num = 3;
const resultado = escalaArray(array, num);
console.log(resultado);