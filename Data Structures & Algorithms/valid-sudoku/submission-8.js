class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
    const colSeen = Array.from({ length: 9 }, () => new Set());
    const boxSeen = Array.from({ length: 9 }, () => new Set());

    for (let row = 0; row < 9; row++) {
      const rowSeen = new Set();

      for (let col = 0; col < 9; col++) {
        const val = board[row][col];
        if (val === ".") continue;

        // Row check
        if (rowSeen.has(val)) return false;
        rowSeen.add(val);

        // Column check
        if (colSeen[col].has(val)) return false;
        colSeen[col].add(val);

        // Sub-box check
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        if (boxSeen[boxIndex].has(val)) return false;
        boxSeen[boxIndex].add(val);
      }
    }

    return true;
  }
}
