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
        if(this.size()-1 < index) return null;
        
        let curr = this.head;
        let currIndex = 1;

        while(currIndex <= index){
            curr = curr.next;
            currIndex++;
        }
        return curr;
    }
}

module.exports = { Node, LinkedList };
