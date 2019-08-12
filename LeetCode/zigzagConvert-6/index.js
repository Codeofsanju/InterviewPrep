/*
    The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of 
    rows like this: (you may want to display this pattern in a fixed font for better 
    legibility)

    Example:

    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:

    P     I    N
    A   L S  I G
    Y A   H R
    P     I
*/

var convert = function(s, numRows) {
    if(numRows === 1) return s;
    
    const ret = new Array(numRows);
    ret.fill('');
    let i = 0;
    
    while(i < s.length){
        for(let j = 0; j < numRows; j++){
            ret[j] += s[i] ? s[i] : '';
            i++;
        }
        for(let j = numRows-2; j> 0; j--){
            ret[j] += s[i] ? s[i] : '';
            i++;
        }
    }
    
    return ret.join('');
};

console.log(convert('PAYPALISHIRING', 3));