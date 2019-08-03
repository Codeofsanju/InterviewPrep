// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const charMap = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    str.split('').map(letter => {
        charMap.has(letter.toLowerCase()) && count++;
    });
    return count;
}

// using regular expressions and .match -> return number of matches
// g means to continue even after one is found and i means insensitive (case insensitive)
function vowelsRegEx(str){
    const matches = str.match(/['aeiou']/gi);

    // if no matches are found, match return null so we must check it
    return matches === null ? 0 : matches;
}


module.exports = vowels;
