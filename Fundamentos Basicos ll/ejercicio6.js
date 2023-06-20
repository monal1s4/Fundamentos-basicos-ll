function imprimirMensajeSecuencia(arr) {
    let contadorImpares = 0;
    let contadorPares = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            contadorPares++;
            contadorImpares = 0;
        } else {
            contadorImpares++;
            contadorPares = 0;
        }

        if (contadorImpares === 3) {
            console.log('¡Qué imparcial!');
            contadorImpares = 0;
        }

        if (contadorPares === 3) {
            console.log('¡Es para bien!');
            contadorPares = 0;
        }
    }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
imprimirMensajeSecuencia(array);