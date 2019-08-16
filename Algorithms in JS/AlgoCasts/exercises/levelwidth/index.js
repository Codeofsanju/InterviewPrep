// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    if(!root) return [0];

    const count = [0];
    const queue = [root, 's'];

    while(queue.length > 1){
        const curr = queue.shift();
        if(curr === 's'){
            count.push(0);
            queue.push(curr);
            continue;
        }
        queue.push(...curr.children);
        count[count.length-1]++;
    }
    return count;
}

module.exports = levelWidth;
