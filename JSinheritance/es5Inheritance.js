// Base animal

const Animal = function(name, energy){  
    this.name = name;
    this.energy = energy;
};

Animal.prototype.eat = function(){
    this.energy += 1;
    console.log(`${this.name} is eating, new energy: ${this.energy}`)
};

Animal.prototype.sleep = function(){
    this.energy += 5;
    console.log(`${this.name} is sleeping, new energy: ${this.energy}`);
};

Animal.prototype.play = function(){
    this.energy -= 2;
    console.log(`${this.name} is playing, new energy: ${this.energy}`);
};


const animal1 = new Animal('animal1', 5);

console.log(animal1);
animal1.eat();
animal1.play();
animal1.sleep();



// Doggo Sub
const Dog = function(name, energy, breed) {
    Animal.call(this, name, energy); // setting this context to dog when calling Animal constructor
    this.breed = breed;
};

Dog.prototype = Object.create(Animal.prototype); // Set Dogs prototype to Animals to inherit methods of animal
Dog.prototype.constructor = Dog; // set constructor to Dog constructor, remember by 

Dog.prototype.bark = function(){
    console.log(`${this.name} goes BARK BARK`);
};

const Bruno = new Dog('Bruno', 10, 'Husky');

console.log('\nBRUNO');
Bruno.eat();
Bruno.play();
Bruno.sleep();
Bruno.bark();

// console.log(Object.getPrototypeOf(Bruno));

console.log('\nPrototype chain of Bruno:');
let curr = Bruno;
while(curr){
    console.log(curr);
    curr = Object.getPrototypeOf(curr);
};

