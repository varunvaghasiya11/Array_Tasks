let n = [10, 4, 7, 30, 8];
let min = n[0];
let max = n[0];

for (let i = 0; i < 5; i++) {
  if (n[i] < min) {
    min = n[i];
  }
  if (n[i] > max) {
    max = n[i];
  }
}

console.log("min", min);
console.log("max", max);
