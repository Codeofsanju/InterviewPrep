/*  PROBLEM:
        Reverse a single linked list.
*/

/*  EXAMPLE:
        Input: 1->2->3->4->5->NULL
        Output: 5->4->3->2->1->NULL
*/

/*  APPROACH:
        - Iterative: O(n) time and O(1) space
            - have a pointer for prev and curr
            - traverse through list storing curr.next in temp variable 
              and setting curr.next to prev.
            - set prev to curr
            - set curr to temp
            - return prev
*/

const reverseLinkedList = (head) => {
    let prev = null;
    let curr = head;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

const Node = function(value){
    this.val = value;
    this.next = null;
};

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
node1.next = node2;
node2.next = node3;

console.log(node1);
console.log('reversed: ', reverseLinkedList(node1));