function crearArrayNegativo(arr) {
    const nuevoArray = [];

    for (let i = 0; i < arr.length; i++) {
        nuevoArray.push(-Math.abs(arr[i]));
    }

    return nuevoArray;
}
const array = [1, -3, 5];
const resultado = crearArrayNegativo(array);
console.log(resultado);