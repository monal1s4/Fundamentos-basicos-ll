function invertir(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }

    return arr;
}
const array = [3, 1, 6, 4, 2];
invertir(array);
console.log(array);