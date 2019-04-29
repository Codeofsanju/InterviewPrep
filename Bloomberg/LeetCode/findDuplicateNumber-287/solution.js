/* PROBLEM:
    Given an array nums containing n + 1 integers where each integer is 
    between 1 and n (inclusive), prove that at least one duplicate number 
    must exist. Assume that there is only one duplicate number, 
    find the duplicate one.
*/

/* EXAMPLE:
    Input: [1,3,4,2,2]
    Output: 2

    Input: [3,1,3,4,2]
    Output: 3
*/

/* APPROACH:
    - Use a hashtable to store unique numbers in input.
    - Iterate through input comparing against hashtable:
        - if the number does not exist in hashtable, add it to hashtable
        - if the number does exist, return the number
*/


const findDuplicate = (nums) => {
    const hash = {};
    for(let i = 0; i < nums.length; i++){
        if(hash[nums[i]] === true){
            return nums[i];
        }
        hash[nums[i]] = true;
    }
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));