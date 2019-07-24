// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// using a charMap
function maxChar(str) {
    const charMap = {};

    str.split('').map(char => {
        if(!charMap[char]){
            charMap[char] = 1;
        }
        else{
            charMap[char]++;
        }
    });

    let greatest = 0;
    let greatestChar = '';
    for(let key in charMap){
        if(charMap[key] > greatest){
            greatest = charMap[key];
            greatestChar = key;
        } 
    }
    return greatestChar;
}

module.exports = maxChar;
