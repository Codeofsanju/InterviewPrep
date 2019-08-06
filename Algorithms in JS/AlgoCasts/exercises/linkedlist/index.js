// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(_data, _next = null){
        this.data = _data;
        this.next = _next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);        
    }

    size(){
        if(!this.head){
            return 0;
        }
        let curr = this.head;
        let length = 0;
        while(curr){
            length++;
            curr = curr.next;
        }
        return length;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head) return null;

        let curr = this.head;
        while(curr){
            if(!curr.next) return curr;
            curr = curr.next;
        }
    }

    clear(){
        this.head = null;
    }

    removeFirst(){
        if(!this.head) return;
        this.head = this.head.next;
    }

    removeLast(){
        if(!this.head) return; // no node case
        if(!this.head.next){ // case in which there is only one node
            this.clear(); 
            return;
        }
        /*
          head -> node1 -> node2 -> null
                  (prev)   (curr)
        */


        let prev = this.head;
        let curr = this.head.next;

        while(curr.next){ //while curr.next is not null
            prev = curr;
            curr = curr.next;
        }
        prev.next = null; // prev is one node behind last node here
    }

    insertLast(data){
        if(!this.head) { // empty linked list case
            this.insertFirst(data);
            return;
        };

        this.getLast().next = new Node(data);
    }

    getAt(index){
        if(!this.head) return null;
        
        let curr = this.head;
        let currIndex = 0;

        while(curr){
            if(currIndex === index){
                return curr;
            }
            curr = curr.next;
            currIndex++;
        }
        return null;
    }

    removeAt(index){
        // empty list case
        if(!this.head) return;

        // first node case
        if(index === 0){
            this.removeFirst();
            return;
        }

        // at a given index
        // let curr = this.head.next;
        // let prev = this.head;
        // let currIndex = 1;
        // while(curr){
        //     if(currIndex === index){
        //         prev.next = curr.next;
        //     }
        //     prev = curr;
        //     curr = curr.next;
        //     currIndex++;
        // }

        // OR using or getAt() method:
        let nodeToDeletePrev = this.getAt(index-1);
        if(!nodeToDeletePrev || !nodeToDeletePrev.next) return;  // index out of bounds case
        nodeToDeletePrev.next = nodeToDeletePrev.next.next;
    }

    insertAt(data, index){
        
        if(index === 0) {   // treat insertion in empty 
            const newNode = new Node(data, this.head);
            this.head = newNode;
            return;
        };
 
        if(this.size()-1 < index){  // if index is out of bounds, insert to end of linked list
            this.insertLast(data);
            return;
        }

        let nodeToInsertAfter = this.getAt(index-1);
        const newNode = new Node(data, nodeToInsertAfter.next);
        nodeToInsertAfter.next = newNode;
    }

    forEach(func){
        if(!this.head) return;
        let curr = this.head;
        let index = 0;
        while(curr){
            func(curr, index); // forEach takes index as second param
            curr = curr.next;
            index++;
        }
    }

    *[Symbol.iterator](){  // using generators, we can step theough our linked list 'yielding' the current node
        let curr = this.head;
        while(curr){
            yield curr;
            curr = curr.next;
        }
    }

}

module.exports = { Node, LinkedList };
