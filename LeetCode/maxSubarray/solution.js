/* PROBLEM
    - Given an integer array nums, find the contiguous subarray 
    (containing at least one number) which has the largest sum and 
    return its sum.
*/ 

/* EXAMPLE
    Input: [-2,1,-3,4,-1,2,1,-5,4],
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/* APPROACH
    - track prev to compare it sum against current number. 
        - set the larger of the 2 to the new prev
    - check prev against max
        - set largest to current max
*/

var maxSubArray = function(nums) {
    let prev = 0;
    let max = -Number.MAX_VALUE;
    nums.map(num => {
        prev = Math.max(prev + num, num);
        max = Math.max(max, prev);
    });
    return max;
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
