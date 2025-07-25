function longestSubstringNonRepeating(s) {
    if (s.length === 0) return 0;

    let max = 0;
    let start = 0;
    let end = 0;

    while (end < s.length) {
        const substring = s.substring(start, end)
        
        //console.log(start, end, substring)

        if(substring.includes(s[end]) && end > 0) {
            start += 1
        } else {
            end += 1
        }

        max = Math.max(max, substring.length)
    }

    return max;
}

const input = "abcabcbb";
const output = longeestSubstringNonRepeating(input);
console.log(output); // Expected output: 3 (the answer is "abc", with the