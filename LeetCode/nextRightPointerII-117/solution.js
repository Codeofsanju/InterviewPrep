/* PROBLEM:
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
*/

/* EXAMPLE:
    See image in dir
*/

/* APPROACH:
   Similar to perfect binary tree next right pointer solution with one more
   check to see if a left of curr.next exists. If it does set curr.right.next 
   to it. else check if curr.next.left !exist, check if curr.next.right does.
   If does set curr.right.next to it. Else set to null.
*/


const node = function(val, right = null, left = null, next = null){
    this.val = val;
    this.right = right;
    this.left = left;
    this.next = next;
};

var connect = function(root) {
    if(!root || !root.left){
        return;
    }
    
    root.left.next = root.right;
    if(root.next){
        if(root.next.left) root.right.next = root.next.left;
        else if(root.next.right) root.right.next = root.next.right;
        else root.right.next = null;
    }
    
    connect(root.right);
    connect(root.left);
};


const node1b = new node(1);
const node2b = new node(2);
const node3b = new node(3);
const node4b = new node(4);
const node5b = new node(5);
const node7b = new node(7);

node1b.left = node2b;
node1b.right = node3b;
node2b.left = node4b;
node2b.right = node5b;
node3b.right = node7b;

console.log('BEFORE: ALL NEXT NULL: ', node1b);
connect(node1b);
console.log('AFTER: NEXT POPULATED');
console.log('node 1 next: ', node1b.next);
console.log('node 2 next: ',node2b.next.val);
console.log('node 3 next: ',node3b.next);
console.log('node 4 next: ',node4b.next.val);
console.log('node 5 next: ', node5b.next.val);