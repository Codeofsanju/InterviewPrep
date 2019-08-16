// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(_data){
        this.data = _data;
        this.children = [];
    }

    // adding a child
    add(data){
        this.children.push(new Node(data));
    }

    // removing a child
    remove(data){
        this.children = this.children.filter(elem => elem.data !== data);
    }
}

class Tree {
    constructor(_root = null){
        this.root = _root;
    }

    traverseBF(fn){
        if(!this.root) return;

        const queue = [this.root]; // create a queue with root as elem

        while(queue.length){ // while this queue is not empty
            const curr = queue.shift(); // get and remove first elem
            queue.push(...curr.children); // place its children into queue
            fn(curr); // call function on removed node
        }

    }

    traverseDF(fn){
        if(!this.root) return;

        const queue = [this.root];

        while(queue.length){
            const curr = queue.shift();
            queue.unshift(...curr.children);
            fn(curr);
        }
    }
}

module.exports = { Tree, Node };
