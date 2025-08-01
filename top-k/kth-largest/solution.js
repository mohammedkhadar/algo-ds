import MinHeap from './min-heap.js'

function kthLargest(arr, k) {
    const heap = new MinHeap()
    for(let a of arr){
        heap.push(a)
        if(heap.size() > k) heap.pop()
    }
    return heap.peek()
}

const nums = [3,2,1,5,6,4]
const k = 2
const output = kthLargest(nums, k)
console.log(output)