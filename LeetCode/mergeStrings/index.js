const mergeStrings = (str1, str2) =>{
    let ret = new Array(str1.length-1+str2.length-1).fill(0);
    let retPointer = 0;
    let pointer1 = 0;
    let pointer2 = 0;
    
    while(pointer1 < str1.length && pointer2 < str2.length){
        if(str1[pointer1] > str2[pointer2]){
            ret[retPointer] = str1[pointer1];
            pointer1++;
        } else {
            ret[retPointer] = str2[pointer2];
            pointer2++;
        }
        retPointer++;
    }

    if(pointer2 !== str2.length) {
        ret = [...ret, ...str2.split('').slice(pointer2)];
    } else if(pointer1 !== str1.length){
        ret = [...ret, ...str1.split('').slice(pointer1)];
    }

    return ret;
};

console.log(mergeStrings('dce', 'cccbd'));

