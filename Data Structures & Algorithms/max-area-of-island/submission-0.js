class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
            if (!grid) return 0
            let largest = 0
            let counter = 0


            const ROWS = grid.length, COLS = grid[0].length

            const bfs = (r, c) => {
                if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) return

                counter += 1
                grid[r][c] = 0
                let directions = [[0, -1], [0, 1], [1, 0], [-1, 0]]
                for (const [dr, dc] of directions) {
                    bfs(r + dr, c + dc)
                }
            }

            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    if (grid[r][c] === 1) {
                        // BFS search and mark visited as 0 to ignore
                        bfs(r, c)
                        largest = Math.max(largest, counter)
                        counter = 0
                    }
                }
            }

            return largest
    }
}
