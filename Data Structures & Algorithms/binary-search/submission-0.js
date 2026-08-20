class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        let left = 0, right = nums.length, res = -1

        while (left < right) {
            let middle = left + Math.floor((right - left) / 2)
            let cur = nums[middle]
            if (cur == target) return middle
            else {
                if (cur < target) left = middle + 1
                else right = middle
            }
        }

        return res
    }
}
