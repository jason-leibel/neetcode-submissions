class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let ref1 = new Map()
        let ref2 = new Map()

        // Build map
        for (let i = 0; i < s.length; i++) {
            let str1 = s.charAt(i)
            if (!ref1.has(str1)) ref1.set(str1, 0)
            else  ref1.set(str1, ref1.get(str1) + 1)


            let str2 = t.charAt(i)
            if (!ref2.has(str2)) ref2.set(str2, 0)
            else  ref2.set(str2, ref2.get(str2) + 1)
        }

        for (const [key, val] of ref1) {
            if (val !== ref2.get(key)) return false
        }

        return true
    }

}
