function subArraySum(arr, k) {
    const prefixSums = {0: 1}
    let counter = 0
    let total = 0


    for(let i=0; i< arr.length;i++) {
        total += arr[i]
        const diff = total-k

        if (prefixSums[diff]) {
            counter+=prefixSums[diff]
        }
        if(prefixSums[total]){
            prefixSums[total]+=1
        } else {
            prefixSums[total]=1
        }
    }
    return counter
}

const input = [1,1,2,6,-6,-2,2,2]
const k = 4
const output = subArraySum(input, k)
console.log(output)