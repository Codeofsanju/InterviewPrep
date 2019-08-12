var maxArea = function(height) {
    if(!height) return 0;
    let left = 0;
    let right = height.length -1;
    let currMax = 0;
    while(left < right){
        const area = (right-left) * Math.min(height[right], height[left]);
        if(area > currMax){
            currMax = area;
        }
        
        if(height[left] >= height[right]){
            right--;
        } else{
            left++;
        }
    }
    return currMax;
};