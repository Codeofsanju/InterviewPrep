// Input: Array of arrays of varrying lengths (nums)
//  Find the mean of each one
//      Group them by whether or not they have the same mean

// EX:
//     input: [[1,3,4,2,5], [5,7], [3,3,3], [8], [9,3]]
//     1. [[0,2], [1,4], [3]] // array of arrays that have indecis of arrays of same mean
//     Assending based on the first index that has that mean, each array should be ascending.



const meanGroups = (arr) => {
    const meanMap = {}; // stores means and arr of array index
        // {
        //    '3': [0,2];
        // }
    arr.map((arrElem, index)=> {
        const currMean = meanHelper(arrElem);
        if(meanMap[currMean]) meanMap[currMean].push(index);
        else{
            meanMap[currMean] = [index];
        } 
    });  
    return Object.values(meanMap).sort((a, b) => a[0] - b[0]);
};


const meanHelper = (arr) => {
    return arr.reduce((accum, num) => accum+num, 0)/arr.length;
};


console.log(meanGroups([[1,3,4,2,5], [5,7], [3,3,3], [8], [9,3]]));