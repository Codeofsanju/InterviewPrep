// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;


// using array methods
class Queue {
    constructor(){
        this.list = [];
    }

    add(elem){
        this.list.unshift(elem);
    }

    remove(){
        return this.list.pop();
    }
}


// using slice and spread syntax
class Queue1 {
    constructor(){
        this.list = [];
    }

    add(elem){
        const newArr = [elem, ...this.list];
        this.list = newArr;
    }

    remove(){
        const element = this.list[this.list.length -1];
        const newArr = this.list.slice(0, this.list.length -1);
        this.list = newArr;
        return element;
    }
}




module.exports = Queue;
