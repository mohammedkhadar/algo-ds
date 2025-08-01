
function mergeIntervals(intervals) {
    //1. sort by start interval
    intervals.sort((a, b) => a[0] - b[0])
    const merged = []
    for(interval of intervals) {
        //2. merge overlapping intervals
        if(merged.length > 0 && merged[merged.length - 1][1] > interval[0]) {
            merged[merged.length - 1][1] = interval[1]
        } else {
            merged.push(interval)
        }
    }

    return merged
}

const intervals = [[1,3],[2,6],[8,10],[15,18]]
const output = mergeIntervals(intervals)
console.log(output)