class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1
        let biggestArea = 0;
        while (l < r) {
            let leftHeight = heights[l], rightHeight = heights[r]
            let smallestHeight = Math.min(leftHeight, rightHeight)
            let width = r - l
            biggestArea = Math.max(biggestArea, (smallestHeight * width))

            if (leftHeight < rightHeight) l++
            else r--
        }

        return biggestArea
    }
}
