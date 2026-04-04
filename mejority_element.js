let arr = [2, 2, 1, 2, 3, 2, 2];

for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }

    if (count > arr.length / 2) {
        console.log("Majority element:", arr[i]);
        break;
    }
}