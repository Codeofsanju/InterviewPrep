/*
    Given two sorted integer arrays nums1 and nums2, merge nums2 into 
    nums1 as one sorted array.

    Note:

    The number of elements initialized in nums1 and nums2 are m and n respectively.
    You may assume that nums1 has enough space (size that is greater or equal to m + n) 
    to hold additional elements from nums2.
    Example:

    Input:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    Output: [1,2,2,3,5,6]
*/

var merge = function(nums1, m, nums2, n) {
    let nums1index = m-1;
    let nums2index = n-1;
    for(let i = n+m-1; i >= 0; i--){
        if(nums2index < 0 || nums1[nums1index] >= nums2[nums2index]){
            nums1[i] = nums1[nums1index];
            nums1index--;
        } else{
            nums1[i] = nums2[nums2index];
            nums2index--;
        }
    }
    return nums1;
};
