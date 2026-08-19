class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let arr = s.split('')
        let result = ""
        let len = 0

        for (let i = 0; i < arr.length; i++) {

            //odd
            let left = i, right = i
            while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
                if ((right - left + 1) > len) {
                    len = right - left + 1
                    result = arr.slice(left, right + 1).join('')
                }
                left--
                right++
            }
            left = i; right = i + 1
            while (left >= 0 && right < arr.length && arr[left] === arr[right]) {
                if ((right - left + 1) > len) {
                    len = right - left + 1
                    result = arr.slice(left, right + 1).join('')
                }
                left--
                right++
            }

        }

        return result
    }
}
