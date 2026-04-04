let n = [1, 2, 3, 4, 5];
let even = 0;
let odd = 0;
for (let i = 0; i <= 4; i++) {
    if (n[i] % 2 == 0) {
        even++;
    }
    else {
        odd++;
    }
}
console.log("even ", even);
console.log("odd ", odd);

