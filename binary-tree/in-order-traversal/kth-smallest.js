import { arrayToBinaryTree } from "../tree.js"
function kthSmallest(root, k) {
    const inorderTraversal = (root, acc) => {
        if(!root) return
        inorderTraversal(root.left, acc)
        acc.push(root.value)
        inorderTraversal(root.right, acc)
        return acc
    }

    return inorderTraversal(root, [])[k-1]
}

const input = [3,1,4,null,2]
const treeRoot = arrayToBinaryTree(input)
console.log(treeRoot)
const output = kthSmallest(treeRoot, 1)
console.log("output:", output )
