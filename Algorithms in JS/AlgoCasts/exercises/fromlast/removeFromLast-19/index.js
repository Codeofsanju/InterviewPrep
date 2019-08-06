/*
    Given a linked list, remove the n-th node from the end of list and 
    return its head.
*/

/* Example

    Given linked list: 1->2->3->4->5, and n = 2.
    After removing the second node from the end, the linked list becomes 
    1->2->3->5.
*/


var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let fastIndex = 1;
    
    if(n === 1 && !head.next){  // if removing the only node in list
        head = null;
        return head;
    }
    
    
    while(fastIndex < n && fast.next){ // space fast n from slow
        fast = fast.next;
        fastIndex++;
    }
    
    
    let prev = 0;
    while(fast.next && slow.next){  // advance both fast and slow
        prev = slow;  // keep track of previous slow
        slow = slow.next;
        fast = fast.next;
    }
    
    if(slow === head){    // if slow is still head, remove first node
        head = head.next;
        return head;
    }
    
    prev.next = slow.next; // remove from between and end
    return head;
};
