function agregaSiete(arr) {
    const nuevoArray = [];

    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(arr[i] + 7);
    }

    return nuevoArray;
}
const array = [1, 2, 3];
const resultado = agregaSiete(array);
console.log(resultado);