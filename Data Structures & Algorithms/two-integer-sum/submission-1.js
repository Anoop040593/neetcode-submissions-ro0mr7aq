class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // let i = 0;
        // let j = 1;
        let n = nums.length;
        let result = [];

        // while(i < j && j < n) {
        //     if(nums[i] + nums[j] === target) {
        //         result.push(i, j);  
        //     } 
        //     j++;
        // }

        for(let i = 0; i < n; i++) {
           for(let j = i + 1; j < n; j++) {
                if(nums[i] + nums[j] === target) {
                    return [i, j];
                } 
            }
        }
    }
}
