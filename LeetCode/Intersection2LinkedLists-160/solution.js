/*  PROBLEM:
        Write a program to find the node at which the intersection of 
        two singly linked lists begins.
*/

/*  EXAMPLE:
        For example, the following two linked lists:
        https://assets.leetcode.com/uploads/2018/12/13/160_statement.png
        begin to instersect at node c1.

*/

/*  APPROACH: O(n+m) time n space
        - Traverse through one list and store address/reference to each node
        in a hash table.
        - Then traverse through other list and check every node in this list:
           - if this node appears in the hashtable, then this node is the 
             intersection node.
*/


const intersectionOfTwoLinkedLists = (head1, head2) => {
    const set = new Set();
    let curr = head1;
    while(curr){
        set.add(curr);
        curr = curr.next;
    }
    curr = head2;
    while(curr) {
        if(set.has(curr)) return curr;
        curr = curr.next;
    }
    return null;
};






// FOR TESTING
const Node = function(value){
    this.val = value;
    this.next = null;
};
const a1 = new Node('a1');
const a2 = new Node('a2');
const c1 = new Node('c1');
const c2 = new Node('c2');
const c3 = new Node('c3');

a1.next = a2;
a2.next = c1;
c1.next = c2;
c2.next = c3;

const b1 = new Node('b1');
const b2 = new Node('b2');
const b3 = new Node('b3');

b1.next = b2;
b2.next = b3;
b3.next = c1;

console.log(intersectionOfTwoLinkedLists(a1, b2));



