/*
    countTinyPairs
    Given 2 arrays, and k iterate array 1 normally at the same time as arr2 in reverse. 
    Concat the numbers are each index and then compare to k. 
    Return how many times pairs were less than k.

*/


const tinyPair = (arr1, arr2, k) => {
    let i1 = 0;
    let i2 = arr2.length -1;
    let count = 0;

    while(i1 < arr1.length && i2 >= 0){
        const toCompare = arr1[i1]+''+arr2[i2];
        if(Number(toCompare) < k){
            count++;
        }
        i1++;
        i2--;
    }
    return count;
};

console.log(tinyPair([1,2,3], [1,2,3], 31));