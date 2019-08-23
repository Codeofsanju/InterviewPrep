// Problem: 
    // given an array, altsort it such that [1,2,3,4,5] = [1,5,2,4,3];
    // then check if it is ascending
function altSort(arr){
    if(!arr) return [];
    let left = 0;
    let right = arr.length -1 ;
    const ret = [];
    let counter = 0;
    
    while(left <= right){
        if(counter % 2 === 0){
            ret.push(arr[left]);
            left++;
        } else{
            ret.push(arr[right]);
            right--;
        }
        counter++;
    }

    for(let i = 0; i < ret.length-1; i++){
        if(ret[i] > ret[i+1]) return false;
    }
    return true;
}

console.log(altSort([1,2,3,4,5,6,7]));
console.log(altSort([1,2,3,4,5,6]));
console.log(altSort([1,3,5,6,4,2]));