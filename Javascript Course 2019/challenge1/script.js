/*
    Mark and John are trying to compare BMI:

    BMI formula = mass/height^2  // mass in kilo height in meters

    return "Is marks bmi higher than John: true"

*/


const Mark = {
    mass: 100,
    height: 2
};

const John = {
    mass: 120,
    height: 2.1
};

function CalcBMI(personObj){
    const {height, mass} = personObj;
    return mass / height*height;
}

function CheckBMI(bmi1, bmi2){
    return bmi1 > bmi2;
}

const markBmi = CalcBMI(Mark);
const JohnBmi = CalcBMI(John);

console.log('markBMI: ', markBmi);
console.log('JohnBmi: ', JohnBmi);

console.log(`Is marks bmi higher than John: ${CheckBMI(markBmi, JohnBmi)}`);