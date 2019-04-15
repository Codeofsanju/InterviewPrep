/* PROBLEM
    - Compute and return suare root of x, where x is guarenteed to be a
    non-negative integer.

    - Since the return type is integer, the decimal digits are truncated 
    and only the integer part of the result is returned.
*/ 

/* EXAMPLE
    Input: 4
    Output: 2
*/

/* APPROACH
    - Binary search method
        - Since we know that 0<= S <= x where s is the answer:
            - We can run a binary search on this range where:
                - start with 0, end with x
                - compute mid as (start+end)/2
                - compare mid*mid with x
                    - if x is equal to mid*mid, return mid
                    - else if x is greator, do binary search between mid+1
                    and end. 
                    - else if x is smaller, do binary search on start to mid
*/

const mySqrt = (x) => {
    if(x === 0) return 0;
    
    let start = 1;
    let end = x;
    while(start+1 < end){
        let mid = Math.floor((start+end) / 2);
        if (mid*mid > x){
            end = mid;
        }
        else if (mid*mid < x){
            start = mid;
        }
        else{ 
            return mid;
        }
    }
    return start;
};

console.log(mySqrt(4));
console.log(mySqrt(1));
console.log(mySqrt(0));
console.log(mySqrt(8));