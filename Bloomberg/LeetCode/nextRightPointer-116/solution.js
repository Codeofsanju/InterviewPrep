/* PROBLEM:
You are given a perfect binary tree where all leaves are on the 
same level, and every parent has two children. The binary tree has t
he following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL
*/

/* EXAMPLE:
View example image in dir
*/

/* APPROACH:
   Using depth first search (post order) traverse tree setting left.next -> right
   In the case of setting right, check if current noxe has a next, if so 
   curr.right.next = curr.next.left
*/
const node = function(val, right = null, left = null, next = null){
    this.val = val;
    this.right = right;
    this.left = left;
    this.next = next;
};


const connect = (root) => {
    if(!root || !root.left) return;
    
    root.left.next = root.right; // connect left -> right
    root.right.next = root.next ? root.next.left : null; // connect right -> next's left
    
    connect(root.left);
    connect(root.right);
};

const node1 = new node(1);
const node2 = new node(2);
const node3 = new node(3);
const node4 = new node(4);
const node5 = new node(5);
const node6 = new node(6);
const node7 = new node(7);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

console.log(node1);
connect(node1);
console.log('after: ', node1);

