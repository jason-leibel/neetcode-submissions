class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length *2)

        nums.forEach((n, index) => {
            ans[index] = n
            ans[nums.length + index] = n
        })

        return ans
    }
}
