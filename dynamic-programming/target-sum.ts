function targetSum(input, sum) {
    //dp[i][sum]
    //offset with max_sum for -ve values

    let max_sum = 0
    for(let i of input) {
        max_sum += i
    }
    
    const cols = (2*max_sum) + 1;
    const dp:Array<number[]> = []
    dp.push(new Array(cols).fill(0))
    
    dp[0][max_sum+input[0]] = 1
    dp[0][max_sum-input[0]] = 1

    for(let i=1;i<input.length;i++) {
        dp.push(new Array(cols).fill(0))
        for(let j=0;j<cols;j++) {
            const element = input[i]

            // if +element is chosen
            if (j-element > -1 && dp[i-1][j-element] > 0) {
                dp[i][j] += dp[i-1][j-element]
            }

            //if -element is chosen
            if ((j+element) < cols && dp[i-1][j+element] > 0) {
                dp[i][j] += dp[i-1][j+element]
            }
        }
    }
    console.log(dp)
    return dp[input.length-1][sum-1]
}

const input = [1, 1, 1,1,1]
const sum = 3
const output = targetSum(input, sum)
console.log(output)