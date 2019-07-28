// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// using charMap
function anagrams(stringA, stringB) {
    const charMap = {};
    for(let char of stringA){ // build initial charMap iterating count and repeated characters
        if(!charMap[char]){
            charMap[char] = 1;
        }
        else{
            charMap[char]++;
        }
    }

    for(let char of stringB){ // second sweep using second string
        if(!charMap[char]){ 
            return false; // if a char does not exist already in charMap, return false
        }
        else{
            charMap[char]--; // decrement count on character that match on second string
        }
    }

    for(let key in charMap){
        if(charMap[key] !== 0){ // check if all counts are zero at this point
            return false; // if not, stringA has an extra letter return false
        }
    }

    return true; // if make it here, return true
}


// using sort()
function anagrams1(stringA, stringB){
    const cleanA = stringA.replace(/[^\w]/g, '').toLowerCase(); // clean input of spaces and characters that are not letters
    const cleanB = stringB.replace(/[^\w]/g, '').toLowerCase(); 

    return cleanA.split('').sort().join('') === cleanB.split('').sort().join(''); // sort both and compare
}

module.exports = anagrams;
