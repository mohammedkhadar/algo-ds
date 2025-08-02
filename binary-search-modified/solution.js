function searchInRotatedArray(arr, target) {
    let left = 0
    let right = arr.length - 1

    while(left <= right) {
        let mid = Math.floor((right + left) / 2)

        if (arr[mid] === target){
            return mid
        }

        // check sorted half
        if(arr[left] < arr[mid]) { //left
            if(arr[left] <= target && target < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { //right
            if(arr[mid] <= target && target < arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}

const nums = [4,5,6,7,0,1,2]
const target = 0
const solution = searchInRotatedArray(nums, target)
const solution2 = searchInRotatedArray([4,5,6,7,0,1,2], 3)

console.log(solution)
//console.log(solution2)