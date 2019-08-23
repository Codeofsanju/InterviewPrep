/*
    input: 2 arrays
        - 1st array is an array of options 
        - 2nd array is values
        Ex:
            ['insert', 'insert', 'addToKey', 'addToValue', get]
            [[1,2], [2,3], [1], [2], [3]]

            output: 5
    
        Insert: takes a key and a value and inserts value to key
        addToKey: takes values from old keys and puts them to keys +n where n is number
                  of keys to add
        addToValue: adds number to all values at keys
        get: takes key returns value
            // if multiple gets, add all gets;
*/


const hashMap = (ops, vals) => {
    let map = {};
    let sum = 0;

    ops.forEach((op, index)=>{
        if(op === 'insert'){
            map[index] = vals[index][1];
        }
        if(op === 'addToKey'){
            const newObj = {};
            for(let key in map){
                newObj[Number(key)+vals[index][0]] = map[key];
            }
            map = newObj;
        }
        if(op === 'addToValue'){
            for(let key in map){
                map[key] += vals[index][0];
            }
        }
        if(op === 'get'){
            if(map[vals[index][0]]) {
                sum += map[vals[index][0]];
                console.log(sum);
            };
        }
    });
    console.log(map);
};


console.log(hashMap(['insert', 'insert', 'addToKey', 'addToValue', 'get'], [[1,2], [2,3], [2], [2], [3]]));