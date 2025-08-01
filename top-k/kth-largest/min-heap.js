class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    push(val) {
        this.heap.push(val)
        this.bubbleUp()
    }

    pop() {
        const top = this.heap[0]
        const end = this.heap.pop()
        
        if(this.heap.length > 0) {
            this.heap[0] = end
            this.bubbleDown()
        }
        return top
    }

    bubbleUp() {
        let index = this.heap.length - 1
        const value = this.heap[index]

        while(index > 0) {
            const parent = Math.floor((index - 1) / 2)
            if(this.heap[parent] <= this.heap[index]) break;
            this.heap[index] = this.heap[parent]
            index = parent
        }
        this.heap[index] = value
    }

    bubbleDown() {
        let index = 0
        const value = this.heap[index]

        while(true) {
            const left = 2*index + 1
            const right = 2*index + 2
            let smallest = index

            if(right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right
            if(left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left

            if(smallest === index) break;

            this.heap[index] = this.heap[smallest]
            index = smallest
        }
        this.heap[index] = value
    }
}

export default MinHeap