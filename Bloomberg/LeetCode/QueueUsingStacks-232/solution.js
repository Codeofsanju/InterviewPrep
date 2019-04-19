/* PROBLEM:
    Implement the following operations of a queue using stacks.
        - push(x) -- Push element x to the back of queue.
        - pop() -- Removes the element from in front of queue.
        - peek() -- Get the front element.
        - empty() -- Return whether the queue is empty.
*/

/* EXAMPLE:
    MyQueue queue = new MyQueue();
    queue.push(1);
    queue.push(2);  
    queue.peek();  // returns 1
    queue.pop();   // returns 1
    queue.empty(); // returns false
*/

/* APPROACH:
    - Have 2 queue. 
        - On push check if main queue has anything in it.
            - if nothing, push item
            - if something, shift everything from this queue to secondary
            queue, push item to main queue, shift everthing back from 
            secondary to main.
*/


const MyQueue = function () {
    this.mainQueue = [];
    this.secondaryQueue = [];
};

MyQueue.prototype.push = function(x){
    if(this.mainQueue.length !== 0){ 
        while(this.mainQueue.length !== 0){
            this.secondaryQueue.push(this.mainQueue.pop());
        };
        this.mainQueue.push(x);
        while(this.secondaryQueue.length !== 0){
            this.mainQueue.push(this.secondaryQueue.pop());
        };
    } else{
        this.mainQueue.push(x);
    }
};

MyQueue.prototype.pop = function(){
    return this.mainQueue.pop();
};

MyQueue.prototype.peek = function(){
    return this.mainQueue[this.mainQueue.length-1];
};

MyQueue.prototype.empty = function() {
    return this.mainQueue.length === 0;
};


const queue = new MyQueue();

queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.empty());