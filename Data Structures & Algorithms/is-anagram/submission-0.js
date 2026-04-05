class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let n = s.length;
        let m = t.length;
        
        let i, j;
        let count = 0;
        if(n !== m) {
            return false;
        }

        let visited = new Array(m).fill(false);

        for(i = 0; i < n; i++ ) {
            let found = false;
            for(j = 0; j < m; j++) {
                if(s[i] === t[j] && !visited[j]) {
                    visited[j] = true;
                    found = true;
                    break;
                }
            }
            if(!found) return false;
        }
    return true;
        
    }
}
