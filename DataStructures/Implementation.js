
const Node = (val) => {
    return {
        val,
        next: null,
    };
};

class HashTable {
    constructor(){
        this.arr = [];
    }

}


const Hash = new HashTable();
const newNode = Node('hello');

console.log(Hash.arr);
console.log(newNode);

