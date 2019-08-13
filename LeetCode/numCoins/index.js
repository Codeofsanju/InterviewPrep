/* Problem:
    - Given cents value, return number of each type of coin to return 
    Ex: input: 88 
        output: 3 quarters, 1 dime, 3 pennies
*/


const numOfCoins = (cents) => {
    if(cents <= 0) return 0;

    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    while(cents > 0){
        if(cents % 25 === 0 || cents >= 25){
            cents -= 25;
            quarters++;
        } 
        else if(cents % 10 === 0){
            cents -= 10;
            dimes++;
        }
        else if(cents % 5 === 0){
            cents -= 5;
            nickels++;
        }
        else{
            cents-=1;
            pennies++;
        }
    }
    return {'quarters': quarters, 'dimes': dimes, 'nickels': nickels, 'pennies': pennies};
};


console.log(numOfCoins(99));