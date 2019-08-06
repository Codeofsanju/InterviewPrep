/*
    Merge two sorted linked lists and return it as a new list. The new list should be 
    made by splicing together the nodes of the first two lists.
*/

/* Example
    Input: 1->2->4, 1->3->4
    Output: 1->1->2->3->4->4
*/


class ListNode{
    constructor(data){
        this.val = data;
        this.next = null;
    }
}


var mergeTwoLists = function(l1, l2) {
    const list = new ListNode();
    const head = list;
    let currList = head;
    
    while(l1 && l2){
        if(l1.val >= l2.val){
            currList.next = new ListNode(l2.val);
            l2 = l2.next;

        } 
        else if(l1.val < l2.val){
            currList.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        currList = currList.next;
    }
    if(l1){
        currList.next = l1;
    }
    if(l2){
        currList.next = l2;
    }
    return head.next;
};
