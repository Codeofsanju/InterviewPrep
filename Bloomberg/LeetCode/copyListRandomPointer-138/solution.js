/*
A linked list is given such that each node contains an additional 
random pointer which could point to any node in the list or null.
Return a deep copy of the list.
*/




function Node(val,next,random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

const node1 = new Node(1, null, null);
const node2 = new Node(2, null, null);
const head = node1;

node1.next = node2;
node2.random = node2;


var copyRandomList = function(head) {
    let curr = head; // pointer for input linked list
    let copied = new Node(0);
    let copiedCurr = copied; // pointer for output linked list

    let visited = new Map();
    
    while(curr){ // to create a output linked list for return
        let toSet = new Node(curr.val, null, null); // create new node
        copiedCurr.next = toSet; // set next element to created node
        copiedCurr = copiedCurr.next; // increment pointer
        visited.set(curr, copiedCurr); // insert to visited map
 
        curr = curr.next; // increment input pointer
    }

    curr = head;

    while(curr){ // to set random pointers
        if(curr.random){ // check if there is a random pointer for current node of input
            visited.get(curr).random = visited.get(curr.random); 
        }
        curr = curr.next;
    }
    return copied.next;
};


console.log(copyRandomList(head));