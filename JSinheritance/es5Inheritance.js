// BASE CONSTRUCTOR
const Animal = function(name, energy){
    this.name = name;
    this.energy = energy;
};

Animal.prototype.eat = function(){
    this.energy+=1;
};

// DOG SUB on Animal
const Dog = function(name, energy, breed){
    Animal.call(this, name, energy);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log('bark bark');
};

// BIRD SUB on ANIMAL
const Bird = function(name, energy, type){
    Animal.call(this, name, energy);
    this.type = type;
};

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.chirp = function(){
    console.log('chirp chirp');
};


// flightLessBird SUB ON BIRD
const flightLessBird = function(name, energy, type, size){
    Bird.call(this, name, energy, type);
    this.size = size;
};

flightLessBird.prototype = Object.create(Bird.prototype);
flightLessBird.prototype.constructor = flightLessBird;

flightLessBird.prototype.getSize = function(){
    console.log(this.size);
};