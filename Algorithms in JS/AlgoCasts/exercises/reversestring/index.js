// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// using array methods
function reverse(str) {
    return str.split('').reverse().join('');
}


// working with a right pointer
function reverse1(str){
    let ret = '';
    let right = str.length-1;
    while(right >= 0){
        ret+=str[right];
        right--;
    }
    return ret;
}


// using a for of
function reverse2(str){
    let reversed = '';
    for(let character of str){
        reversed = character + reversed; // we add each character behind the last
    }
    return reversed;
}

// using Reduce
 function reverse3(str){
     return str.split('').reduce((accum, char) => char + accum, '');
 }
module.exports = reverse;
