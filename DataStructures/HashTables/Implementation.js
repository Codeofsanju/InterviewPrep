
// const Node = (val) => {
//     return {
//         val,
//         next: null,
//     };
// };

// const LinkedList = (node) => {
//     return {
//         head: node
//     };
// };

// class HashTable {
//     constructor(){
//         this.arr = new Array(16); // predefined length is import using modulus to map hash to index
//     }
    
//     hash(val){
//         const hashValue = val.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0); // some hash function that was found online sue me
//         return this.mapToArr(hashValue);
//     }
//     mapToArr(hashValue){
//         return hashValue%this.arr.length;
//     }

//     insert(node){
//         const index = this.hash(node.val);
//         if(this.arr[index]){
//             let curr = this.arr[index];
//             while(curr){
//                 if(!curr.next){
//                     curr.next = node;
//                     return;
//                 }
//                 curr = curr.next;
//             }
//         }
//         else{
//             const LL = LinkedList(node);
//             this.arr[index] = LL;
//         }
//     }

//     search(val){
//         const index = this.hash(val);
//         if(this.arr[index]) {
//             let curr = this.arr[index];
//             while(curr){
//                 if(curr.val === val){
//                     return curr.val;
//                 }
//                 if(!curr.next){
//                     return 'This value does not exist in HashTable';
//                 }
//                 curr = curr.next;
//             }
//         }
//         else {
//             return 'This value does not exist in HashTable';
//         }
//     }
// }


// const Hash = new HashTable();
// const nodeA = Node('abc');
// const nodeB = Node('abc');
// const nodeC = Node('def');

// console.log(Hash.arr);
// console.log(nodeA);
// console.log(nodeB);
// console.log('Size of underlying array: ',Hash.arr.length);
// console.log(`Mapped Index From hash value of '${nodeA.val}': `, Hash.hash(nodeA.val));
// console.log(`Mapped Index from hash value of '${nodeB.val}': `, Hash.hash(nodeB.val));
// console.log(`Mapped Index from hash value of '${nodeC.val}': `, Hash.hash(nodeC.val));

// Hash.insert(nodeA);
// Hash.insert(nodeB);
// Hash.insert(nodeC);
// console.log(Hash.search(nodeA.val));
// console.log(Hash.search(nodeC.val));
// console.log(Hash.search('grfe'));

//```Given an array sort by frequency of occurrence first then by value so[1,2,1,3,4,4,4,5] => [2,3,5,1,1,4,4,4]```

//[1,2,1,3,4,4,4,5] => [2,3,5,1,1,4,4,4]

const wutSort = (arr) => {
    const hash = {};
    const moreThanOne = [];
    const onlyOne = [];
    arr.map(elem => {
        typeof hash[`${elem}`] === 'undefined' ? hash[elem] = 1 : hash[elem]++;
    });
    for(let num in hash){
        if(hash.hasOwnProperty(num)){
            if(hash[num] > 1){
                for(let i = 0; i < hash[num]; i++){
                    moreThanOne.push(num);
                }
            }
            else{
                onlyOne.push(num);
            }
        }
    }
    console.log('occurences: ',hash);
    return [...onlyOne, ...moreThanOne];
};

console.log(wutSort([1,2,1,3,4,4,4,5]));