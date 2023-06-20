function imprimirYummy(array) {
    let tieneComida = false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "comida") {
            console.log("yummy");
            tieneComida = true;
        }
    }

    if (!tieneComida) {
        console.log("tengo hambre");
    }
}
const array1 = ["manzana", "pizza", "comida"];
imprimirYummy(array1);
const array2 = ["manzana", "pizza", "sandwich"];
imprimirYummy(array2);