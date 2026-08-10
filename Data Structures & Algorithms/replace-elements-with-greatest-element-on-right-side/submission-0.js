class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let curMax = -1
        
        for (let i = arr.length - 1; i >= 0; i--) {
            // Compute Max
            let temp = Math.max(arr[i], curMax)
            arr[i] = curMax
            curMax = temp
        }

        return arr
    }
}
