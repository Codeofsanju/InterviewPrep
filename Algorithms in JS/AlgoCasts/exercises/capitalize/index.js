// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// through array conversion
function capitalize(str) {
    const arrStr = str.split(' ');
    const res = [];

    arrStr.map(word => {
        res.push(word[0].toUpperCase() + word.split('').slice(1).join(''));
    });

    return res.join(' ');
}


// By checking if left char is a space
function capitalize1(str) {
    let res = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
        if(str[i-1] === ' '){
            res += str[i].toUpperCase();
        }
        else{
            res += str[i];
        }
    }
    return res;
}


module.exports = capitalize;
