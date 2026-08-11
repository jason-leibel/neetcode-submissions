class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for (let i = 0; i < nums.length; i++) {
            let needle = target - nums[i]
            if (map.has(needle)) return [map.get(needle), i]
            else map.set(nums[i], i)
        }
    }
}
