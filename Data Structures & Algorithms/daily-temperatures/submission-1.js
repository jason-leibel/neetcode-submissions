class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // Brute force
        let t = temperatures
        let res = new Array(t.length).fill(0), stack = []

        // While left pointer is less than length
        for (let i = 0; i < t.length; i++) {
            while (
                stack.length > 0 &&
                t[i] > t[stack[stack.length - 1]]
            ) {
                let oldIndex = stack.pop()
                res[oldIndex] = i - oldIndex
            }
            stack.push(i)
        }

        return res
    }
}
