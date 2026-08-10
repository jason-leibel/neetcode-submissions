class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let map1 = this.buildMap(s)
        let map2 = this.buildMap(t)

        let isDiff = false

        Object.keys(map1).forEach(key => {
            if (map1[key] !== map2[key]) isDiff = true
        })

        return !isDiff
    }

    buildMap(str) {
        let map = {}

        for (let i = 0; i < str.length; i++) {
            let char = str[i]
            if (map[char]) map[char] += 1;
            else map[char] = 1;
        }

        return map
    }
}
