function duplicarArray(arr) {
    const nuevoArray = [];

    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(arr[i] * 2);
    }

    return nuevoArray;
}

const array = [1, 2, 3];
const resultado = duplicarArray(array);
console.log(resultado);