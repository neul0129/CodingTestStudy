function quickSort (array) {
    if (array.length < 2) {   //array의 길이가 1 이하이면 해당 배열을 그대로 return

    
    return array;
    }
    const pivot = [array[0]];  //원소의 0번째 요소를 pivot으로 잡는다.
    const left = [];
    const right = [];  //left와 right 배열을 새로 만든다.
    for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {  //0번째 요소 다음 요소부터 순회하며 pivot과 값을 비교
    left.push(array[i]);
    } else if (array[i] > pivot) {
    right.push(array[i]);   //left 배열, right 배열에 데이터를 push한 후
    } else {
    pivot.push(array[i]);
    }
    }
    return quickSort(left).concat(pivot, quickSort(right));   //하위 배열에 대해 다시 재귀 호출을 하면서 세 배열을 합쳐준다.
    }
    const sorted = quickSort([5, 7, 9, 0, 3, 1, 6, 2, 4, 8]);
    console.log(sorted);
    