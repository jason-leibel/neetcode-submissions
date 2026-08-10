class Solution {
    /**
     * @param {number[]} students - queue
     * @param {number[]} sandwiches - stack
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length

        let count = {}

        students.forEach(student => {
            if (count[student]) count[student] += 1
            else count[student] = 1
        })

        for (let i = 0; i < sandwiches.length; i++) {
            if (count[sandwiches[i]] > 0) {
                res -= 1
                count[sandwiches[i]] -= 1
            } else return res
        }

        return res
    }
}
