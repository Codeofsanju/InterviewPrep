// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true


/*  Approach
    - use the fast + slow variable approach
        - fast: start at list.head 
        - slow: start at list.head
    - traverse list
        - fast: advance 2 times each loop
        - slow: advance 1 time each loop
        Ex: 
            node1 -> node2 -><- node3
            fast
            slow

            node1 -> node2 -><- node3
                     slow       fast

            node1 -> node2 -><- node3
                                fast
                                slow

    - return true if slow and fast are ever equal
    - return false if fast reaches null and fast was never equal to slow

*/


function circular(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }

    return false;
}

// or using a set to keep track of what has already been visited:
    // iterate through linked list, adding references to nodes that are not in set
    // if node already exists in set, we hit a loop => return true
    // if you finish loop and never hit the above case, return false

function circularMap(list){
    let visited = new Set();

    let curr = list.head;

    while(curr){
        if(!visited.has(curr)){
            visited.add(curr);
        }
        else{
            return true;
        }
        curr = curr.next;
    }

    return false;
}

module.exports = circular;
