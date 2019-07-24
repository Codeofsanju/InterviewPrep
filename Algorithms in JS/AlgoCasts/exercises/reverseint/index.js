// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// using parseInt + Math.sign()
    // parseInt deals with leading 0's in something like 500 = 005 and (-) liks -532 = 236-
    // Math.sign(n) return -1 if number is neg and 1 if positive
function reverseInt(n){
    const reversed = n.toString().split('').reverse().join('');
    const newNumber = parseInt(reversed, 10);
    return newNumber * Math.sign(n);
}



// using parsint and if condition on n to check if neg
function reverseInt1(n){
    const reversed = n.toString().split('').reverse().join(''); // convert to string -> arr -> reverse -> string
    const newNumber = parseInt(reversed, 10); // -> pull number out of string
    if(n < 0){ // -> check if original was neg
        return newNumber * -1; // multiply by -1 if it was and return
    } else {
        return newNumber; // else return positive
    }
}



module.exports = reverseInt;
