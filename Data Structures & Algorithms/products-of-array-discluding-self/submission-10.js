class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let n;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    if (n != null) n *= nums[j]
                    else n = nums[j]
                }
            }
            result.push(n)
        }

        return result
    }
}
