

# [Dynamic Programming](https://chatgpt.com/share/686fa868-e448-8003-9790-1432e9c2c497)

### **1\. Fibonacci Sequence / Climbing Stairs**

* Base case: smallest subproblems

* Recurrence: `dp[n] = dp[n-1] + dp[n-2]`

### **2\. 0/1 Knapsack**

* Choices: take or don't take

* `dp[i][w] = max(dp[i-1][w], dp[i-1][w - weight[i]] + value[i])`

### **3\. Unbounded Knapsack / Coin Change**

* Unlimited items

* Change order of loops

### **4\. Subset Sum / Partition**

* Yes/no decision problems

* Boolean DP

### **5\. Longest Common Subsequence (LCS)**

* Strings DP

* Match or skip characters

### **6\. Palindrome DP**

* `dp[i][j]` → whether substring `s[i:j]` is a palindrome

* Bottom-up approach often used

### **7\. DP on Trees / Graphs**

* Post-order traversal

* Combine child subproblems

### **8\. DP with Bitmasking**

* Represent state as bitmask

* Often used in permutations or subsets

