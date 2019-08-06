// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

/*  Approach
    - Using fast slow method broken up into 2 parts:   
        - First you want to create the space between fast and slow. The space should
          be n spaces apart.
            - Do this by advancing fast by 3 first. Use fastCount variable to keep
              track of how many advancements have happened
        - Then iterate again, this time advancing both slow and fast by one until 
          fast hits the end of the list
        - Return slow at this point
    Ex: fromLast(list, 4) where list = a -> b -> c -> d -> e -> f
        a -> b -> c -> d -> e -> f  } initial, fast count = 1 <= n = 4
        f
        s

        a -> b -> c -> d -> e -> f  } advance f, fast count = 2 <= n = 4
             f
        s

        a -> b -> c -> d -> e -> f  } advance f, fast count = 3 <= n = 4
                  f
        s

        a -> b -> c -> d -> e -> f  } advance f, fast count = 4 <= n = 4 (break)
                       f
        s

        -----Next loop-------
        a -> b -> c -> d -> e -> f  } advance f and s => f has not reached end, continue
                            f
             s

        a -> b -> c -> d -> e -> f  } advance f and s  => f has reached end, return s
                                 f
                  s
*/

function fromLast(list, n) {
    let fast = list.head;
    let slow = list.head;
    let fastIndex = 1;

    while(fastIndex <= n && fast.next){
        fast = fast.next;
        fastIndex++;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;
