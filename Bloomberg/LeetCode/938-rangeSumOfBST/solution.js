/* PROBLEM:
    Given the root node of a binary search tree, return the sum of 
    values of all nodes with value between L and R (inclusive).

    The binary search tree is guaranteed to have unique values.

*/

/* EXAMPLE:
    Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
    Output: 32

    Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
    Output: 23
*/

/* APPROACH:
    - Traverse tree in any way pushing to an array if curr node val in <=R && >= L
    - Reduce array to sum and return
*/

const rangeSumBST = (root, L, R) => {
    if(!root) return 0;

    const arr = [];

    const traverse = (node) => {
        if(node.val >= L && node.val <= R) arr.push(node.val);

        if(node.left){
            traverse(node.left);
        }
        if(node.right){
            traverse(node.right);
        }
    };

    traverse(root);
    
    return arr.reduce((accum, n) => accum+n);
};