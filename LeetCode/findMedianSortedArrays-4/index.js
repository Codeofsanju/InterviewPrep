
/*
 There are two sorted arrays nums1 and nums2 of size m and n respectively:
    Example 1:
    nums1 = [1, 3]
    nums2 = [2]
    - The median is 2.0
    
    Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]
    - The median is (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let combinedArr = [...nums1];
    for(let i = 0; i < nums2.length; i++){
        combinedArr.push(null);
    }
    let num1Index = nums1.length-1;
    let num2Index = nums2.length-1;
    for(let i = combinedArr.length-1; i >= 0; i--){
        if(num1Index < 0 || nums2[num2Index] >= nums1[num1Index]){
            combinedArr[i] = nums2[num2Index];
            num2Index--;
        }
        else{
            combinedArr[i] = nums1[num1Index];
            num1Index--;
        }
    }
    let midPoint = combinedArr.length/2;
    
    if(combinedArr.length % 2 === 0){ 
        return (combinedArr[midPoint] + combinedArr[midPoint-1]) / 2;
    } else { 
        return combinedArr[Math.floor(combinedArr.length/2)];
    }
    
};

console.log(findMedianSortedArrays([1,3,5,7], [2,4,6]));