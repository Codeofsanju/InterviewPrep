3 // --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }


/* 
    node1 -> node2 -> node3 -> node4 -> node5   } odd number of nodes case
                      ^^^^^
                      return
    node1 -> node2 -> node3 -> node4 -> node5 -> node6  } even number of nodes case
                      ^^^^^
                      return
                    
*/

/* APPROACH
    To find center node we will:
        - use 2 temporary variables assigned to the first variable of the linked list 
            - fast
            - slow
        - We will traverse the linked list, and for every iteration:
            - advance slow by 1 element
            - advance fast by 2 elements
            Ex:
                node1 -> node2 -> node3 -> node4 -> node5   } start
                slow
                fast

                node1 -> node2 -> node3 -> node4 -> node5   } first iteration
                         slow     fast

                node1 -> node2 -> node3 -> node4 -> node5   } second iteration
                                  slow              fast
        - When fast reaches end of list, resturn slow
        - For even number of variables case, check if node exists when advancing fast, if it does not, even case.

*/

function midpoint(list) {
    // no use of size() or a counter variable
    let slow = list.head;
    let fast = list.head;

    while(fast.next){
        if(!fast.next){ // odd number case
            break;
        }
        if(!fast.next.next){ // even number case
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

}

module.exports = midpoint;
