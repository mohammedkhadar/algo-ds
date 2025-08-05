function hasCycle(head) {
    if (!head || !head.next) return false;

    let fast = head
    let slow = head

    while(slow !== null) {
        slow = slow?.next
        fast = fast.next.next

        if (slow === fast) {
            return true
        }
    }
}

// Definition for singly-linked list.
class ListNode {
    constructor(value, next=null) {
        this.value = value
        this.next = next
    }
}

const node1 = new ListNode(3, node2);
const node2 = new ListNode(2, node3);
const node3 = new ListNode(0, node4);
const node4 = new ListNode(-4);
node4.next = node2; // Create cycle

console.log(hasCycle(node1)); // true
