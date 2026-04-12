/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let index = 0;
        let dummy = head;
        let visited = new Set();

        while(dummy !== null ) {
            if(visited.has(dummy)) {
                return true;
            }

            visited.add(dummy);
            dummy = dummy.next;
        }
        return false;
    }
}
