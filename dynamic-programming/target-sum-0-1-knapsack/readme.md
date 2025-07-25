2\. Target Sum (0/1 knapsack)

Problem:

We are given a list of numbers, `nums`, and a `target` value. Find out how many ways we can add plus or minus signs in front of the numbers in `nums` to get the `target` value, while keeping the order of the numbers the same.

Let's consider an example where `nums = [2, 1]` and `target = 1`.

1. `+2 - 1 = 1` → **matches the target**.  
2. `-2 + 1 = -1` → does not match.  
3. `+2 + 1 = 3` → does not match.  
4. `-2 - 1 = -3` → does not match.

So, there’s only one way (`+2 - 1`) to get the target value `1`.

**Solution**

| Aspect | Knapsack | Target Sum |
| ----- | ----- | ----- |
| Each item is used once | Yes | Yes |
| Binary decision per item | Take or don’t take | Use `+` or `−` sign |
| Total state space | Depends on total weight/values | Depends on sum from `−S` to `+S` |
| DP dimensions | `dp[i][w]` | `dp[i][sum]` |

**Example: nums \= \[1,1,1,1,1\] ; sum \= 3**

| i | \-5 | \-4 | \-3 | \-2 | \-1 | 0 | 1 | 2 | 3 | 4 | 5 |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **0** |  |  |  |  |     1 |  |     1 |  |  |  |  |
| **1** |  |  |  |     1 |  |     2 |  |    1 |  |  |  |
| **2** |  |  |    1 |  |       3 |  |       3 |  |    1 |  |  |
| **3** |  |    1 |  |    4 |  |    6 |  |    4 |  |    1 |  |
| **4** |    1 |  |    5 |  |    10 |  |    10 |  |    5 |  |    1 |



