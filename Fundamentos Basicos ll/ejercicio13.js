function cambiaHaciaElCentro(arr) {
    const longitud = arr.length;
    const mitad = Math.floor(longitud / 2);

    for (let i = 0; i < mitad; i += 2) {
        const temp = arr[i];
        arr[i] = arr[longitud - 1 - i];
        arr[longitud - 1 - i] = temp;
    }
}
const array1 = [true, 42, "Ada", 2, "pizza"];
cambiaHaciaElCentro(array1);
console.log(array1);

const array2 = [1, 2, 3, 4, 5, 6];
cambiaHaciaElCentro(array2);
console.log(array2);