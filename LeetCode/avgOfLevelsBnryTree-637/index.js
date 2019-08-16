/*PROBLEM:
    Given a non-empty binary tree, return the average value of the nodes on 
    each level in the form of an array.
    Example 1:
    Input:
         3
        / \
       9  20
         /  \
        15   7
    Output: [3, 14.5, 11]

    Explanation:
    The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on 
    level 2 is 11. Hence return [3, 14.5, 11].

  APPROACH:
    - Breadth First Search with queue that has a variable in it to signal end of level
    - count and sum variable used to keep track on each level
*/

const avgOfLevels = (root) => {
    if(!root) return;
    const avgs = [root.val];
    const queue = [root, 's']; // s used here to signal end of level
    let count = 0;
    let sum = 0;

    while(queue.length > 1){
        const curr = queue.shift();
        if(curr === 's'){
            count = 0;
            sum = 0;
            queue.push(curr);
            avgs.push(0);
        } else {
            if(curr.left){
                queue.push(curr.left);
            };
            if(curr.right){
                queue.push(curr.right);
            };
            sum += curr.data;
            count++;
            avgs[avgs.length-1] = sum/count;
        };
    };
    return avgs;
};



//TEST
function node(_data, _left = null, _right = null){
    this.data = _data;
    this.left = _left;
    this.right = _right;
}

const node2 = new node(9);
const node4 = new node(15);
const node5 = new node(7);
const node3 = new node(20, node4, node5);
const node1 = new node(3, node2, node3);


console.log(avgOfLevels(node1));