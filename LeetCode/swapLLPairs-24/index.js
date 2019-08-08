/* Problem:
    Given: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    Return: 2 -> 1 -> 4 -> 3 -> 6 -> 5
    
    Approach:
        - Using left, right, and prev variables, traverse list swapping nodes.

*/


function ListNode(_val, _next = null){
    this.val = _val;
    this.next = _next;
}

var swapPairs = function(head) {
    if(!head) return head;

    let dummyHead = new ListNode();
    dummyHead.next = head;
    
    let left = dummyHead;
    let prev = left;
    let right = left.next;
    
    while(left.next && left.next.next){
        prev = left;
        left = left.next;
        right = left.next;
        
        left.next = right.next;
        right.next = left;
        prev.next = right;
    }
    return dummyHead.next;
    
};

const node6 = new ListNode(6);
const node5 = new ListNode(5, node6);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);




console.log(swapPairs(node1));