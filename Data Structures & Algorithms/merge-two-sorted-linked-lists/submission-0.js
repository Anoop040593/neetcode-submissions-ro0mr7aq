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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let dummy = new ListNode(0);
        let current = dummy;
        while(list1 && list2) {
            if(list1.val < list2.val) {
                current.next = list1; //we put 1 here, as per example
                list1 = list1.next; //push the pointer to 2.
            } else {
                current.next=  list2;
                list2 = list2.next;
            }
            current = current.next; //move the array forward.
        }
        //If one lsit has more node the below will put them in array.
        if(list1) current.next = list1;
        if(list2) current.next = list2; 

        return dummy.next;
        


    }
}
