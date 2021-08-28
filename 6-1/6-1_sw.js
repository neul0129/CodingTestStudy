const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let i;
let j;
let tmp;

for (i = 0; i < array.length; i++) {
    let min_index = i;
    for (j = i + 1; j < array.length; j++) {
        if(array[min_index] > array[j]){
            min_index = j;
        }
        tmp = array[min_index];
        array[min_index] = array[i];
        array[i] = tmp;
    }
}
console.log(array);
