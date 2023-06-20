function imprimirMenorDevolverMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
    }

    console.log('Menor:', menor);
    return mayor;
}
const array = [5, 10, -3, 2, 1];
const resultado = imprimirMenorDevolverMayor(array);
console.log('Mayor:', resultado);