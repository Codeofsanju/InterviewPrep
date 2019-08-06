/*
Given an array of integers, return indices of the two numbers such that 
they add up to a specific target.

You may assume that each input would have exactly one solution, and 
you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


const twoSum = function(nums, target) {
    const mapper = {};
    if(nums.length === 2) return [0,1];
    for(let i = 0; i < nums.length; i++){
        if(mapper[target - nums[i]] !== undefined){
            return [mapper[target-nums[i]], i];
        }
        else{
            mapper[nums[i]] = i;
        }
    }
};


console.log(twoSum([2,7,11,15], 9));