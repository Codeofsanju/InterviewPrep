// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


 

function pyramid(n) {
    const maxWidth = n*2 - 1;
    const midPoint = Math.floor(maxWidth / 2);

    for(let row = 0; row < n; row++){
        let res = '';
        for(let column = 0; column < maxWidth; column++){
            if(midPoint - row <= column && midPoint + row >= column){
                res+='#';
            } else{
                res+=' ';
            }
        }
        console.log(res);
    }
}


function pyramidRecursive(n, row = 0, level=''){
    if(row === n){
        return;
    }
    const rowWidth = (2*n) -1;
    if(level.length === rowWidth){
        console.log(level);
        return pyramidRecursive(n, row+1);
    }

    const midPoint = Math.floor(rowWidth/2);
    if(midPoint - row <= level.length && midPoint + row >= level.length){
        level+='#';
    } else{
        level+=' ';
    }
    pyramidRecursive(n, row, level);
}


module.exports = pyramid;
