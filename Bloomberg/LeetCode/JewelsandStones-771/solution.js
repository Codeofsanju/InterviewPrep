/* PROBLEM:
You're given strings J representing the types of stones that are jewels, 
and S representing the stones you have.  Each character in S is a type 
of stone you have.  You want to know how many of the stones you have are 
also jewels.

The letters in J are guaranteed distinct, and all characters in J and S 
are letters. Letters are case sensitive, so "a" is considered a different 
type of stone from "A".

*/

/* EXAMPLE:
    Input: J = "aA", S = "aAAbbbb"
    Output: 3

    Input: J = "z", S = "ZZ"
    Output: 0
*/

/* APPROACH:
    - Iterate through J creating a set for it if current letter does 
    not exist in set
    - Iterate though S checking if current is in set, if it is count++
    - Return count
*/

const numJewelsInStones = (J, S) => {
    if(J.length === 0) return 0;
    let count = 0;
    const set = new Set();

    J.split('').map(n => !set.has(n) && set.add(n));
    S.split('').map(n => set.has(n) && count++);

    return count;
};