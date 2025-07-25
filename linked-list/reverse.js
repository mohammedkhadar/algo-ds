import LinkedList from "./linked-list.js"
function reverseLinkedList(head) {
    let prev = null
    let curr = head


    while(curr) {
        const nextNode = curr.next
        curr.next = prev

        prev = curr
        curr = nextNode
    }
    return prev
}

let list = new LinkedList([10, 20, 30]);
console.log("input:")
list.printList(list.head)

console.log("output:")
const output = reverseLinkedList(list.head)
list.printList(output)
