class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let lowPtr = 0;
        let highPtr = 1;
        let maxDiff = 0;

        while (lowPtr < prices.length) {
            if (prices[lowPtr] < prices[highPtr]) {
                let diff = prices[highPtr] - prices[lowPtr]
                if (diff > maxDiff) maxDiff = diff
                highPtr += 1
            } else {
                // Left pointer is higher
                lowPtr = highPtr
                highPtr = lowPtr + 1
            }
        }

        return maxDiff
    }
}
