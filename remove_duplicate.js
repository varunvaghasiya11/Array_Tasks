let arr = [1,3,5,6,3,6];
let unique = [];

for(let i=0;i<arr.length;i++){
    let found = false;

    for(let j=0;j<unique.length;j++){
        if(arr[i] === unique[j]){
            found = true;
            break;
        }
    }
    if(!found){
        unique.push(arr[i]);
    }
}
console.log(unique);