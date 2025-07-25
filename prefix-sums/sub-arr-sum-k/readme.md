# Sub array with sum k

**Problem:**

Given an array of integers `nums` and an integer `k`, return *the total number of subarrays whose sum equals to* `k`.

A subarray is a contiguous **non-empty** sequence of elements within an array.

**Example:**

A= \[1,1,2,6,-6,-2,2,2\]  
K \= 4

Result: 5

**Solution:**  
Use prefix sums to memoize sums

Prefix\_sums \= {0: 1}  
Diff \= Total \- k  
Counter \+= Prefix\_sums\[Diff\]

