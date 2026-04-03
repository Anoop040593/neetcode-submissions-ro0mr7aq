class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        let i = 0;
        let j = newS.length - 1;
        while(i < j) {
            if(newS[i] !== newS[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
