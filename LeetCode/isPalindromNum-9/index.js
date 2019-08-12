/*
    Determine whether an integer is a palindrome. An integer is a palindrome when 
    it reads the same backward as forward.

    Example 1:

    Input: 121
    Output: true
    Example 2:

    Input: -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 
    121-. Therefore it is not a palindrome.
*/



var isPalindrome = function(x) {
    const stringed = x.toString();
    if(stringed[0] === '-') return false;
    
    let left = 0;
    let right = stringed.length-1;
    
    while(left < right){
        if(stringed[left] !== stringed[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};


console.log(isPalindrome(121));
console.log(isPalindrome(-123));
console.log(isPalindrome(10));