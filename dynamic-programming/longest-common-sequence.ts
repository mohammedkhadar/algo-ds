const longestCommonSequence = (s1, s2) => {
    const dp: Array<number[]> = []
    let max = 0

    for(let i=0; i<s1.length; i++) {
        dp.push([])
        for(let j=0; j< s2.length; j++) {
            if (s1[i] === s2[j]) {
                const previousCount = i === 0 || j === 0 ? 0 : dp[i-1][j-1]
                dp[i][j] = previousCount + 1
                max = Math.max(dp[i][j], max)
            } else {
                dp[i][j] = 0
            }
        }
    }
    
    //console.log(dp)
    return max
}

const s1 = "abcdf"
const s2 = "abedf"
console.log(longestCommonSequence(s1, s2))