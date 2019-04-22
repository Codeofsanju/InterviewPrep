/* PROBLEM:
    Given a string containing just the characters 
    '(', ')', '{', '}', '[' and ']', 
    determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Note that an empty string is also considered valid.
*/

/* EXAMPLE:
    Example 1:
        Input: "()"
        Output: true
        Example 2:

        Input: "()[]{}"
        Output: true
        Example 3:

        Input: "(]"
        Output: false
        Example 4:

        Input: "([)]"
        Output: false
        Example 5:

        Input: "{[]}"
        Output: true
*/

/* APPROACH:
    - Have 2 queue. 
        - On push check if main queue has anything in it.
            - if nothing, push item
            - if something, shift everything from this queue to secondary
            queue, push item to main queue, shift everthing back from 
            secondary to main.
*/