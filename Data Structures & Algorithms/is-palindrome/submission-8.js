class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.replaceAll(" ", "").toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
        let isSame = true

        for (let i = 0; i < str.length; i++) {
            let frontIndex = i
            let endIndex = (str.length - 1) - frontIndex
            if (str[frontIndex] != str[endIndex]) isSame = false;
        }

        return isSame;
    }
}
