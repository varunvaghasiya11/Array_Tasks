let arr = [2,5,4,6,7,8];
let target = 9;

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == target){
            console.log("index ",i,j);
            break;
        }
    }
}