class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let res = false

        for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
            let row = matrix[rowIndex]

            // easy case
            if (row[0] == target || row[row.length - 1] == target) return true

            // Check edges
            if (row[0] < target && row[row.length - 1] > target) {
                // It either has to be here or it doesnt exist
                let l = 0, r = row.length
                while (l < r) {
                    let middle = l + Math.floor((r - l) / 2)
                    if (row[middle] === target) return true
                    else {
                        if (row[middle] < target) l = middle + 1
                        else r = middle
                    }
                }
            } else {
                if (row[row.length - 1] < target) continue
                else return false
            }
        }

        return res
    }
}
