/* PROMPT:
Design a stack that supports push, pop, top, 
and retrieving the minimum element in constant time.

- push(x) -- Push element x onto stack.
- pop() -- Removes the element on top of the stack.
- top() -- Get the top element.
- getMin() -- Retrieve the minimum element in the stack
*/

/* EXAMPLE:
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> Returns -3.
    minStack.pop();
    minStack.top();      --> Returns 0.
    minStack.getMin();   --> Returns -2.
*/

/* APPROACH
    1. Create a MinStack class or function
    2. Have a stack and minStack property
    3. On push check against minStack property to see if new variable if 
       less or equal to current top of minStack. If less push on both stacks, else
       only push on stack and not minStack
    4. On pop check if variable popped from stack is equal to variable on 
       top of minStack. If equal pop from both, else only pop from stack and
       not minStack
*/


var MinStack = function() {
    this.minStack = [];
    this.stack = [];
};


MinStack.prototype.push = function(x) {
this.stack.push(x);
if(x <= this.minStack[this.minStack.length-1] || this.minStack.length === 0){
    this.minStack.push(x);
}
};


MinStack.prototype.pop = function() {
const ret = this.stack.pop();
if(ret === this.minStack[this.minStack.length-1]){ 
    this.minStack.pop();
}
};


MinStack.prototype.top = function() {
return this.stack[this.stack.length-1];    
};


MinStack.prototype.getMin = function() {
return this.minStack[this.minStack.length-1];
};

// OR CLASS BASED APPROACH:

class MinStackClass{
    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(x){
        this.stack.push(x);
        if(this.minStack.length === 0 || x<=this.minStack[this.minStack.length-1]){
            this.minStack.push(x);
        }
    }

    pop(){
        const ret = this.stack.pop();
        if(ret === this.minStack[this.minStack.length-1]){
            this.minStack.pop();
        }
    }

    top(){
        return this.stack[this.stack.length-1];
    }

    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}

const minStack1 = new MinStack();
minStack1.push(-1);
console.log(minStack1.getMin());
minStack1.push(-2);
console.log(minStack1.getMin());
minStack1.pop();
console.log(minStack1.top());
console.log(minStack1.getMin());

const minStack2 = new MinStackClass();
minStack2.push(-1);
console.log('\nClass Based\n',minStack2.getMin());
minStack2.push(-2);
console.log(minStack2.getMin());
minStack2.pop();
console.log(minStack2.top());
console.log(minStack2.getMin());

