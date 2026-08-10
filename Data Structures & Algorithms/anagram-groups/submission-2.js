class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}

        strs.forEach(str => {
            let sorted = this.alphaSort(str)
            if (!map[sorted]) map[sorted] = []

            map[sorted].push(str)
        })

        return Object.values(map)
    }

    alphaSort(str) {
        return str.split("").sort().join("")
    }
}
