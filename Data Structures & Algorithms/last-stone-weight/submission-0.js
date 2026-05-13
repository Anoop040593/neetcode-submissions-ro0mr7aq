class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while(stones.length > 1) {
            stones.sort((a,b) => b - a);

            let y = stones.shift();
            let x = stones.shift();

            if(x !== y) {
                stones.push(y - x);
            }
        }

        if(stones.length === 0){
            return 0;
        }

        return stones[0];
    }
}
