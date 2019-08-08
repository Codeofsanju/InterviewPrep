/*
    Given a sorted linked list, delete all duplicates 
    such that each element appear only once.

    Example 1:
        Input: 1->1->2
        Output: 1->2

    Example 2:
        Input: 1->1->2->3->3
        Output: 1->2->3

*/


var deleteDuplicates = function(head) {
    if(!head) return head;
    
    let curr = head.next;
    let prev = head;
    while(curr) {
        if(curr.val === prev.val){
            prev.next = curr.next;
            curr = curr.next;
        } else{
            prev = curr;
            curr = curr.next;
        }
    }
    
    return head;
};
