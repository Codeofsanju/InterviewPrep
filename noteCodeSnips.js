// Look at all the wonderful errors after uncommenting 'use strict'
// 'use strict'; 

var bar = null;
console.log(typeof bar === "object"); // logs true!

console.log((bar !== null) && (typeof bar === 'object')); // logs false

console.log((bar !== null) && (bar.constructor === Object));


(function(){
    var a = b = 3;
})();

console.log('a defined?', typeof a !== 'undefined');
console.log('b defined?', typeof b !== 'undefined');

var b = 3;
var a = b;

b = 3;
var a = b;


var myObject = {
    foo: "bar",
    func: function(){
        var self = this;
        console.log("out func: this.foo = ", this.foo);
        console.log("outer func:  self.foo = ", self.foo);
        (function(){
            console.log("inner func:  this.foo = ",  this.foo);
            console.log("inner func:  self.foo = ",  self.foo);
        }());
    }
};

myObject.func();

const foo = {};
foo.bar = 1;  // operated by CreateDataProperty*

// the above is the same as
Object.defineProperty(foo, 'bar', {
  value: 1,
  configurable: false // any attempt to delete the property or change its attribute will fail
});




const foo1 = () =>
{
  return {
      bar: "hello"
  };
}

const foo2 = () =>
{
  return 
  {
      bar: "hello"
  };
}

console.log(foo1());
console.log(foo2()); // undefined because a return without anything else on the line automatically gets a semicolon placed at the end


console.log(typeof NaN === "number");  // logs "true"
console.log(NaN === NaN);  // logs "false"
console.log('aa' === NaN); // logs false
console.log(isNaN('aa')); // logs true

const nan = NaN;
console.log(nan !== nan);


console.log(0.1+0.2);
console.log(0.1 + 0.4 == 0.3);

const areNumbersAlmostEqual = (num1, num2) => {
    return Math.abs(num1 - num2) < Number.EPSILON;
};
console.log(areNumbersAlmostEqual(0.1 + 0.2, 0.3));



const isInteger = (x) => (x ^ 0) === x;
console.log(isInteger(2)); // true
console.log(isInteger(1.2)); // false
console.log(isInteger('1')); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(null)); // false


// (function () {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2); 
//     }, 1000);
    
//     setTimeout(() => {
//         console.log(3);
//     }, 0);

//     console.log(4);
// })();

const isPalindrome = (str) => {
    let rightPointer = str.length-1;
    let leftPointer = 0;
    while(leftPointer < rightPointer){
        if(str[leftPointer] === str[rightPointer]){
            leftPointer++;
            rightPointer--;
        }
        else{
            return false;
        }
    }
    return true;
};

console.log('isPalindrome dad: ', isPalindrome('dad'));
console.log('isPalindrome atta: ', isPalindrome('atta'));
console.log('isPalindrome ASDF:', isPalindrome('ASDF'));