// Base Class Animal

class Animal{
    constructor(name, energy){
        this.name = name;
        this.energy = energy;
    };
    eat(){
        this.energy += 1;
        console.log(`Animal is eating, new energy: ${this.energy}`)
    }
    sleep(){
        this.energy += 5;
        console.log(`${this.name} is sleeping, new energy: ${this.energy}`);
    }
    play(){
        this.energy -= 2;
        console.log(`${this.name} is playing, new energy: ${this.energy}`);
    }
}
 
class Dog extends Animal{
    constructor(name, energy, breed){
        super(name, energy);
        this.breed = breed;
    };
    bark(){
        console.log(`${this.name} goes BARK BARK`);
    }
}


const Bruno = new Dog('Bruno', 10, 'Husky');


console.log('Prototype Chain of Bruno using classes for inheritance');

let curr = Bruno;
while(curr){
    console.log(curr);
    curr = Object.getPrototypeOf(curr);
}