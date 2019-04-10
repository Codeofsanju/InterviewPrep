/* PROBLEM:
    Design and implement a data structure for Least Frequently Used (LFU) 
    cache. It should support the following operations: get and put.

    get(key) - Get the value (will always be positive) of the key if 
    the key exists in the cache, otherwise return -1.
    put(key, value) - Set or insert the value if the key is not already 
    present. When the cache reaches its capacity, it should invalidate the 
    least frequently used item before inserting a new item. For the purpose of
    this problem, when there is a tie (i.e., two or more keys that have the 
    same frequency), the least recently used key would be evicted.
*/


/* EXAMPLE:
    LFUCache cache = new LFUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    cache.get(2);       // returns -1 (not found)
    cache.get(3);       // returns 3.
    cache.put(4, 4);    // evicts key 1.
    cache.get(1);       // returns -1 (not found)
    cache.get(3);       // returns 3
    cache.get(4);       // returns 4
*/

/* APPROACH:
    1. Have nodes that represent items in cache:
        node: 
        {
            value,
            freq
        }
    2. Have a cache object:
        cache:
        {
            key1: node1,
            key2: node2,
            key3: node3
        }
    3. Have a array of ordered keys by freq
    Ex: node1 = {val: 'node1', freq: 2}
        node2 = {val: 'node2', freq: 3}
        node3 = {val: 'node3', freq: 1}
    
        array = [key2, key1, key3]
*/

const Node = function(val){
    this.val = val;
    this.freq = 0;
};

const LFUCache = function(cap) {
    this.cache = {};
    this.list = [];
    this.capacity = cap;
};




LFUCache.prototype.get = (key) => {
    if(!this.cache[key]){
        return -1;
    } else {
        this.cache[key].freq++;
        this.list.sort((a, b) => {
            return this.cache[a].freq > this.cache[b].freq ? 1 : -1;
        });
        return this.cache[key];
    }
};

LFUCache.prototype.put = (key, value) => {
    const node = new Node(value);
    console.log(node);
    this.cache[key] = node;
};

const LFU = new LFUCache(50);
console.log(LFU);
LFU.put('key1', 1);
LFU.put('key2', 2);
LFU.put('key3', 3);