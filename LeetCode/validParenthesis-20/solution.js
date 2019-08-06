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
    Use a stack to keep track of brackets and hash table to match on pop()!
*/

const isValid = (bracketStr) => {
    if([')', '}', ']'].includes(bracketStr[0])) return false;
    const stack = [];
    const map = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    const split = bracketStr.split('');
    for(let i = 0; i < split.length; i++){
        if(split[i] === '(' || split[i] === '{' || split[i] === '['){
            stack.push(split[i]);
        } else{
            if(stack[stack.length-1] === map[split[i]]){
                stack.pop();
            } else{
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));