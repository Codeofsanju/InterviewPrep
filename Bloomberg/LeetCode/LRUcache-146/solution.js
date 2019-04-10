/* PROBLEM:
    Design and implement a data structure for Least Recently Used (LRU) cache. 
    It should support the following operations: get and put.
        - get(key) - Get the value (will always be positive) of the key if the 
        key exists in the cache, otherwise return -1.
        - put(key, value) - Set or insert the value if the key is not already 
        present. When the cache reached its capacity, it should invalidate the 
        least recently used item before inserting a new item.


    Could you do both operations in O(1) time complexity?
*/

/* EXAMPLE:
    LRUCache cache = new LRUCache( 2 ); 2 is capacity
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4
*/

/* APPROACH:
    1. have a list tp track recently used 
    2. have a map to store cached items
*/


class LRUCache{
    constructor(capacity){
        this.list = [];
        this.cache = new Map();
        this.capacity = capacity;
    }

    //put(key, value) - Set or insert the value if the key is not already 
    //present. When the cache reached its capacity, it should invalidate the 
    //least recently used item before inserting a new item.
    put(key, value){
        if(!this.cache.has(key)){
            if(this.cache.size === this.capacity){
                let removedKey = this.list.shift(); // get least recently used from list
                this.cache.delete(removedKey); // delete from cache
            }
            this.cache.set(key, value); // set new value
            this.list.push(key); // push to most recently accessed
        } else {
            this.cache.set(key, value);
            this.get(key); // get will place to most recently used
        }
    }

    //Get the value (will always be positive) of the key if the key exists
    //in the cache, otherwise return -1.
    get(key){ 
        if(this.cache.has(key)){
            let index = this.list.indexOf(key); // find index of key
            let removedKey = this.list[index]; // store 
            this.list.splice(index, 1); // remove from list
            this.list.push(removedKey); // place at most recently used
            return this.cache.get(key);
        } else {
            return -1;
        }
    }
}