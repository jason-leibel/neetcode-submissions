class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0
        const sorted = new Set(nums.sort((a, b) => a - b))
        nums = [...sorted]
        let count = 1, max = 1;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] + 1) count += 1;
            else count = 1;
            if (count > max) max = count
        }

        return max
    }
}
