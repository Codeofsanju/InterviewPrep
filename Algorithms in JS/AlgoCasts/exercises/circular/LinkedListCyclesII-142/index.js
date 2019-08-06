/*
 Given a linked list, return the node where the cycle begins. 
 If there is no cycle, return null.
*/


var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let returned = false;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){  // cycle found
            returned = true;
            break;
        }
    }
    
    if(!returned) return null; // if no cycle was found
    
    fast = head;   // set fast back to head
    while(fast !== slow){  // find start of loop
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
};
