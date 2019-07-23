/*
    1. Calculate average scores given scores array
    2. Decide which team wins in average scores, print to console
*/


const teams = [{name: 'John', scores: [20,80,54]}, {name: 'Bobby', scores: [25,32,5,64]}, {name: 'Mary', scores: [26,23,56]}];

function avgHelper(team){
    const {scores} = team;
    // let sum = 0;
    const sum = scores.reduce((acumm, score) => acumm + score, 0);
    return sum / scores.length;
}


function teamAverageBuilder(tms){
    tms.map(team => {
        team.avgScore = avgHelper(team);
    });
}

function topAvg(arr){
    return arr.sort((a,b) => b.avgScore - a.avgScore)[0];
}


teamAverageBuilder(teams);

const {name, avgScore} = topAvg(teams);


console.log(`Team with highest average score is ${name} with an average of ${avgScore}`);