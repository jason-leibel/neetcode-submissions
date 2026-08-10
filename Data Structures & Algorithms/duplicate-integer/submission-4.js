class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        let duplicate = false;

        nums.forEach(n => {
            if (set.has(n)) duplicate = true
            else set.add(n)
        })

        return duplicate
    }
}