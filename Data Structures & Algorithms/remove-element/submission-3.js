class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let curr = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[curr] = nums[i]
                curr++;
            }
        }

        return curr
    }
}
