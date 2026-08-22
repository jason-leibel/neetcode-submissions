class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let clean = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let start = 0;
        let end = clean.length -1;
        let result = true;

        while (start < clean.length) {
            if (clean.charAt(start) !== clean.charAt(end)) {
                result = false
                break;
            }
            // Dont forget to move pointers
            start++;
            end--;
        }

        return result;
    }
}
