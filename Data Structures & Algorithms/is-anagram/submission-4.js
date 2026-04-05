class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    let n = s.length;
    let m = t.length;

    if (n !== m) return false;

    let visited = new Array(m).fill(false);

    for (let i = 0; i < n; i++) {
        let found = false;

        for (let j = 0; j < m; j++) {
            if (s[i] === t[j] && !visited[j]) {
                visited[j] = true; // mark as used
                found = true;
                break;
            }
        }

        if (!found) return false;
    }

    return true;
}
}
