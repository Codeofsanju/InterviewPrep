/* PROBLEM
    - Say you have an array for which the ith element is the price of 
    a given stock on day i.
    - Design an algorithm to find the maximum profit. You may complete 
    as many transactions as you like (i.e., buy one and sell one share 
    of the stock multiple times).

    * Note: You may not engage in multiple transactions at the same 
    time (i.e., you must sell the stock before you buy again).
*/ 

/* EXAMPLE
    -Input: [7,1,5,3,6,4]
    Output: 7
    Explanation: 
        - Buy on day 2 (price = 1) 
        - sell on day 3 (price = 5), profit = 5-1 = 4.
        - Then buy on day 4 (price = 3) and sell on day 5 (price = 6),
         profit = 6-3 = 3.
*/

/* APPROACH
    - have a max variable to add up profits
    - map over prices
        - check if next day price is higher,
            - if higher add difference between current day and next day
            to max variable
*/

const maxProfit = (prices) => {
    let max = 0;
    prices.map((price, index) => {
        if(prices[index+1] > price){
            max += prices[index+1] - price;
        }
    });
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]));