function imprimirPenultimoDevolverPrimerImpar(arr) {
    const penultimo = arr[arr.length - 2];
    let primerImpar;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            primerImpar = arr[i];
            break;
        }
    }

    console.log('Penúltimo:', penultimo);
    return primerImpar;
}
const array = [2, 4, 6, 7, 9, 11];
const resultado = imprimirPenultimoDevolverPrimerImpar(array);
console.log('Primer impar:', resultado);