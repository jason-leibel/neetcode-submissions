class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        operations.forEach((op, index) => {
            if (op === 'C') stack.pop()
            else if (op === '+') {
                 stack.push(
                    stack[stack.length - 1] +
                    stack[stack.length - 2]
                )
            } else if (op === 'D') {
                stack.push(stack[stack.length - 1] * 2)
            } else stack.push(parseInt(op))
        })

        return stack.reduce((acc, curr) => acc + parseInt(curr), 0)
    }
}
