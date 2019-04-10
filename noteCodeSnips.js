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
