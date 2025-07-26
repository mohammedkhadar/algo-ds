function TreeNode(value, left=null, right=null) {
    this.value = value
    this.left = left
    this.right = right
}

export function arrayToBinaryTree(arr) {
    if (arr.length === 0) return null
    const root = new TreeNode(arr[0])
    const stack = [root]

    let i = 1
    while(i < arr.length) {
        const currentNode = stack.shift()
        if(arr[i]) {
            const leftNode = new TreeNode(arr[i])
            currentNode.left = leftNode
            stack.push(leftNode)
        }
        i++

        if(arr[i]) {
            const rightNode = new TreeNode(arr[i])
            currentNode.right = rightNode
            stack.push(rightNode)
        }
        i++
    }

    return root
}