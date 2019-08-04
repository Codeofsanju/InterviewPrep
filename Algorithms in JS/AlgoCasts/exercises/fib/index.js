// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3



// iterative solution using temp variable - this is a O(n) approach in complexity
function fib(n) { 
    let curr = 1;
    let prev = 0;
    for(let i = 2; i <= n; i++){  // essentially starting at index 2 since we need the first two elements of sequence to start
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr;
}

// iteratuve using an array - this is a O(n) approach for both memory and complexity
function fib1(n){
    let record = [0,1]; // fib sequence always starts with 0,1
    for(let i = 2; i <= n ; i++){
        record.push(record[i-1]+record[i-2]);
    }
    return record[n]; // or record[record.length-1]
 }


 // recursive appproach  ~ this is an O(n^2) approach (exponential) so you can do better!
 function fibRec(n){
    if(n===1 || n===0){
        return n;
    }

    return fibRec(n-1) + fibRec(n-2);
 }


 // using memoization (process of staoring function args along with results) to speed things up
 function memoize(func){ // pass any function you want to memoize here. in our case fib
    const memo = {};

    return function(...args){
        // if found already in memo
        if(memo[args]){
            return memo[args];
        }

        // if not create a memo by calling original function with args an storing result
        const result = func.apply(this, args); 
        memo[args] = result;
        return result;
    };
 }

 const fibMemoized = memoize(fibRec1);

 function fibRec1(n){
    if(n===1 || n===0){
        return n;
    }

    return fibMemoized(n-1) + fibMemoized(n-2);
 }
 
 // useing the memoization function 

module.exports = fibMemoized;
