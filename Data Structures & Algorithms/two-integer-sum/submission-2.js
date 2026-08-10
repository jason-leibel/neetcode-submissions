class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for (let i = 0; i < nums.length; i++) {
            let n = nums[i]
            let goal = target - n

            if (map.has(goal)) return [map.get(goal), i]
            else map.set(n, i)
        }
    }
}
