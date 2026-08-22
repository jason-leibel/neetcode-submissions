class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let max = 0
        // Build Map
        let map = new Map()
        s.split('').forEach(char => {
                map.set(char, 0)
        })

        // Loop
        for (let r = 0; r < s.length; r++) {
            while (map.get(s[r]) !== 0) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }

            map.set(s[r], 1)

            // calculate max here
            max = Math.max(max, r - l + 1)
        }

        return max
    }
}
