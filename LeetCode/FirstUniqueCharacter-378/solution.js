/* PROMPT:
Given a string, find the first non-repeating character in it and 
return it's index. If it doesn't exist, return -1.
*/

/* EXAMPLE:
s = "leetcode"
return 0.

s = "loveleetcode",
return 2
*/

/* APPROACH:
    -Create a set of key value paires where the key is the char at string[i]
        - if set does not have s[i] make value 1
        - if has increment value
    -Loop sring again checking against created set
        - if check is still equal to 1, return index
*/

var firstUniqChar = function(s) {
    const set = {};
    for(let i = 0; i < s.length; i++){
        if(set[s[i]]){
            set[s[i]]++;
        }
        else if(!set[s[i]]){
            set[s[i]] = 1;
        }
    }
    for(let i = 0; i < s.length; i++){
        if(set[s[i]]===1){
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar(""));
console.log(firstUniqChar("aabbc")); 