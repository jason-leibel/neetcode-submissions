class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let lengthCurr = ""
        for (let i = 0; i < str.length; i++) {
            let char = str[i]
            // Check if at delimiter
            if (char === '#') {
                let length = parseInt(lengthCurr)
                let end = i + length
                res.push(str.substring(i + 1, end + 1))
                lengthCurr = ""
                i = end
            } else {
                // We are still reading the length
                lengthCurr += char
            }
        }

        return res
    }
}
