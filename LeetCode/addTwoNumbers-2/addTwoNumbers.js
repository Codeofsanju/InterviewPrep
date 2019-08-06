/* eslint-disable complexity */

/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

function ListNode(val){
    this.val = val;
    this.next = null;
};


const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);


// (2 => 4 => 3) + (5 => 6 => 4) = 7 => 0 => 8

const addTwoNumbers = (l1, l2) => {
    let curr = new ListNode(0);
    let dummyHead = new ListNode(0);
    dummyHead.next = curr;
    let carry = 0;

    while(l1 || l2 || carry > 0){
        let sum = carry + (l1 ? l1.val : null) + (l2 ? l2.val : null); // set sum using conditions
        carry = sum > 9 ? 1 : 0;
        l1 = l1 ? l1.next : null; // increment if current node not null
        l2 = l2 ? l2.next : null; // increment if current node not null
        curr.next = new ListNode(sum % 10); // add node to result list
        curr = curr.next; // increment to next node for next interation
    };
    return dummyHead.next.next;
};


console.log(addTwoNumbers(list1, list2));