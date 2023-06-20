function longitudesPrevias(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }

    return arr;
}
const array = ["programar", "dojo", "genial"];
const resultado = longitudesPrevias(array);
console.log(resultado);