class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        strs.forEach(str => {
            result += str.length + "#" + str
        })

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []

        if (str.length == 1) return [""]

        let lengthCurr = ""
        let curr = 0
        while (curr < str.length) {
            if (str.charAt(curr) === '#') {
                let lengthOfWord = parseInt(lengthCurr)
                res.push(str.substr(curr + 1, lengthOfWord))
                curr += lengthOfWord + 1
                lengthCurr = ""
            } else {
                lengthCurr += str.charAt(curr).toString()
                curr += 1
            }
        }

        return res
    }
}
