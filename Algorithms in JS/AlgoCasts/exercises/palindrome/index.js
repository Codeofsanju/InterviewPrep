// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// ratchetng with 2 pointers O(logN)
function palindrome(str) {
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

// reversing and comparing O(n)
function palindrome1(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// using every
function palindrome2(str){
    return str.split('').every((char, index) => char === str[str.length - index-1]);
}

module.exports = palindrome;
