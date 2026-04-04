let arr = [1, 2, 3, 4, 5];
let k = 2;
console.log(arr.length);

for (let i = 0; i < k; i++) {
    let first = arr[0];//1

    for (let j = 0; j < arr.length - 1; j++) {//3. 
        arr[j] = arr[j + 1];// 
    }

    arr[arr.length - 1] = first;
}

console.log(arr);