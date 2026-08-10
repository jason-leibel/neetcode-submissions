class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            '}': '{', 
            ']': '[', 
            ')': '(' 
        }

        for (let i = 0; i < s.length; i++) {
            let bracket = s[i]
            if (map[bracket]) {
                // Must be a closing bracket
                if (stack[stack.length - 1] !== map[bracket]) return false
                else {
                    stack.pop()
                }
            } else {
                stack.push(bracket)
            }
        }

        // Stack must be empty for valid string
        return stack.length === 0;
    }
}
