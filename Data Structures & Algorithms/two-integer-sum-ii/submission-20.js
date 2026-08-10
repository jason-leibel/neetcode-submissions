class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let result = 0
        let i1 = 0;
        let i2 = numbers.length - 1

        while (i1 < i2) {
            result = numbers[i1] + numbers[i2]
            if (result === target) {
                return [i1 + 1, i2 + 1];
            }
            // Too big
            if (result > target) i2 -= 1
            else if (result < target) i1 += 1
        }

    }
}
