class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Get count
        const freq = new Map();

        for (const n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1);
        }

        let arr = Array.from(freq.entries())
        arr.sort((a,b) => b[1] - a[1])

        let result = []
        for (let i = 0; i < k; i++) {
            result.push(arr[i][0])
        }

        return result
    }
}
