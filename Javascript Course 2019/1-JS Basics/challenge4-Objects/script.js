/*
    Running off the fist coding challenge (BMI comparison):
    Now:
    1. For each of person, create an object with:
        a. Full name
        b. mass
        c. height
    2. Then, add a method to each object to caluclate the BMI. Save the
    BMI to the object and also return it from the method.
    3. In the end, log to the console who was the highest BMI, together
    with the full name and the respective BMI. 
*/

const Person = function(name, mass, height){
    this.name = name;
    this.mass = mass;
    this.height = height;
};

Person.prototype.calcBMI = function(){
    const BMI = this.mass / (this.height * this.height);
    this.bodyMassIndex = BMI;
    return BMI; 
};

const arrOfPeople = [new Person('John Smith', 100, 2.1), new Person('Joe Shmoe', 80, 2.0)];



const orderByBMI = function(arrOfPeeps){
    return arrOfPeeps.sort((a, b) => b.calcBMI() - a.calcBMI());
};

orderByBMI(arrOfPeople);

console.log(arrOfPeople);

console.log(`Person with highest BMI is ${arrOfPeople[0].name} with a BMI of ${arrOfPeople[0].bodyMassIndex}`);