// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const res = [];
    for(let i = 0; i<n; i++){
        res[i] = new Array(n-1).fill(0);
    }

    let rowStart = 0;
    let rowEnd = n-1;
    let columnStart = 0;
    let columnEnd = n-1;
    let counter = 1;

    while(rowStart <= rowEnd && columnStart <= columnEnd){
    //top row
        for(let i = columnStart; i <= columnEnd; i++){
            res[rowStart][i] = counter;
            counter++;
        }
        rowStart++;
        
    //right column
        for(let i = rowStart; i <= rowEnd; i++){
            res[i][columnEnd] = counter;
            counter++;
        }
        columnEnd--;

    //bottom row
        for(let i = columnEnd; i >= columnStart; i--){
            res[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;

    //left column
        for(let i = rowEnd; i >= rowStart; i--){
            res[i][columnStart] = counter;
            counter++;
        }
        columnStart++;
    }
    console.log(res);
    return res;
}

module.exports = matrix;
