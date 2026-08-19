/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        // Sort by meeting start
        intervals.sort((a,b) => a.start - b.start)

        for (let i = 0; i < intervals.length - 1; i++) {
            let meet1 = intervals[i]
            let meet2 = intervals[i + 1]

            // Compare meet1 end time to meet2 start time
            if (meet1.end > meet2.start) return false
        }

        return true
    }
}
