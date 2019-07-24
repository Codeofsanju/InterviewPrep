/*
    John and his family went on a holiday anf went to 3 different restaurants.
    The bills were $124, $48 and $268.

    To tip the waiter a fair amount, John created a simple tip calculator
    (as a function). He likes to tip:
        1. 20% of bill when bill < $50
        2. 15% when $50 < bill < $200
        3. 10% bill > $200

    In the end, John would like to have 2 arrays:
        1. Containing all three tips (one for each bill)
        2. Containing all three final paid amounts (bill + tip).
*/

const bills = [124, 48, 268];

const tipCalcHelper = function(price){
    let ret = 0;
    if(price < 50){
         ret = price * .20;
    } else if(price > 50 && price < 200){
        ret = price * .15;
    } else{
        ret = price * .10;
    }

    return Number(ret.toFixed(2));
};

const tipArray = function(billsArr, priceInclude = false){
    const tipAmount = [];
    billsArr.map(cost => {
        tipAmount.push(priceInclude ? cost+tipCalcHelper(cost) : tipCalcHelper(cost));
    });
    return tipAmount;
};

const costAndTip = function(billsArr){
    return tipArray(billsArr, true);
};

console.log("Tips amounts: ", tipArray(bills));
console.log("Price+tips totals: ", costAndTip(bills));