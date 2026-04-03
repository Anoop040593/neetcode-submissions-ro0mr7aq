class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums.sort((a, b) => a - b);
        let i = 0;
        let n = nums.length;
        let j = 1;
        while(j < n) {
            if(nums[i] === nums[j]) {
                return true;

            }
            j++;
            i++;

        }
        return false;
    }
}
