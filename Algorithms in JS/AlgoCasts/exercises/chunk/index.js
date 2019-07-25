// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// slice and splice approach (mutates original array)
function chunk(array, size) {
    let ret = [];
    while(array.length > 0){
        ret.push(array.slice(0, size));
        array.splice(0,size);
    }
    return ret;
}


// index approach (does not mutate original array)
function chunk1(array, size){
    const ret = [];
    let index = 0;

    while(index < array.length){
        ret.push(array.slice(index, index+size));
        index+=size;
    }

    return ret;
}



module.exports = chunk;