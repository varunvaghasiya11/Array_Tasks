let arr = [1,5,-3,2,-4];

let pos = [];
let neg = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        pos.push(arr[i]);
    }else{
        neg.push(arr[i]);
    }
}

let result = [];
let i=0;
let j=0;

while(i<pos.length && j<neg.length){
    result.push(pos[i]);
    result.push(neg[j]);
    i++;
    j++;
}

while(i<pos.length){
    result.push(pos[i]);
    i++;
}

while(j<neg.length){
    result.push(neg[j]);
    j++;
}

console.log(result);