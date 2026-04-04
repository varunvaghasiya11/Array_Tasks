let arr = [1,0,2,0,3,0];
let result = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        result.push(arr[i]);
    }
}

let zero = arr.length - result.length;

for(let i=0;i<zero;i++){
    result.push(0);
}

console.log(result);