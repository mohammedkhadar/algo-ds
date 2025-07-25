# Longest Non-Repeating Substring

**Problem:** Given a string `s`, find the length and content of the longest substring without repeating characters.

**Example:**

**`s = "abcabcbb"`**

**`Output: 3`**

**`Solution:`**

`Sliding window with 2 pointers - start + end`

`0 0  ( 0 )`  
`0 1 a ( 1 )`  
`0 2 ab ( 2 )`  
`0 3 abc ( 3 )`  
`1 3 bc ( 2 )`  
`1 4 bca ( 3 )`  
`2 4 ca ( 2 )`  
`2 5 cab ( 3 )`  
`3 5 ab ( 2 )`  
`3 6 abc ( 3 )`  
`4 6 bc ( 2 )`  
`5 6 c ( 1 )`  
`5 7 cb ( 2 )`  
`6 7 b ( 1 )`  
`7 7  ( 0 )`

