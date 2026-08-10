class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0;
        let cursor = 0;
        for (let i = 0; i <= nums.length; i++) {
            if (nums[i] === 1) cursor += 1
            else {
                if (cursor > count) count = cursor

                cursor = 0
            }
        }

        return count
    }
}
