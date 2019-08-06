/* PROBLEM:
    Given an array containing n distinct numbers taken from 
    0, 1, 2, ..., n, find the one that is missing from the array.
*/

/* EXAMPLE:
    Input: [3,0,1]
    Output: 2

    Input: [9,6,4,2,3,5,7,0,1]
    Output: 8
*/

/* APPROACH:
    - Calc expected sum
    - Calc actual sum
    - return expected - actual
*/


const missingNumber = (nums) => {
    let expectedSum = 0;
    const sum = nums.reduce((acum,num) => {
        return acum + num;
    }, 0);

    for(let i = 0; i <= nums.length; i++){
        expectedSum+=i;
    };
    return expectedSum - sum;
};


console.log(missingNumber([3,0,1]));