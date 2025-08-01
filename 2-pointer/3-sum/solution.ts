function threeSum(arr: number[]) {
    const result: number[][] = []
    arr.sort()

    for(let i=0;i<arr.length-2;i++) {
        // skip duplicates
        if(i>0 && arr[i-1] === arr[i]) continue

        let left = i+1;
        let right = arr.length - 1;

        while(left < right && right < arr.length) {
            const sum = arr[i] + arr[left] + arr[right]
            if (sum < 0) {
                left += 1
            } else if (sum > 0) {
                right += 1
            } else {
                result.push([arr[i], arr[left], arr[right]])

                // skip duplicate
                while(arr[left] === arr[left+1]) left++
                while(arr[right] === arr[right-1]) right--

                left++
                right--
            }
        }
    }
    return result
}

const input = [-1,0,1,2,-1,-4]
const output = threeSum(input)
console.log(output)

// Runtime: O(n^2)