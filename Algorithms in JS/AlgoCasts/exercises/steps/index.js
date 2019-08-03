// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for(let i = 0; i < n; i++){
        let res = '';
        for(let j = 0; j < n; j++){
            if(j <= i){
                res+='#';
            }
            else{
                res+=' ';
            }
        }
        console.log(res);
    }
}

// using recursion 
function recursiveSteps(n, res = '', j=0){
    if(j === n){
        return;
    }

    if(n === res.length){
        console.log(res);
        return recursiveSteps(n, '', j+1);
    }

    if(res.length <= j){
        res+='#';
    } else{
        res+=' ';
    }
    recursiveSteps(n, res, j);

}

console.log(steps(4));

module.exports = steps;
