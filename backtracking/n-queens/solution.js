function nqueens(n) {
    const result = []
    const cols = new Set()
    const diag1 = new Set()
    const diag2 = new Set()
    const currentBoard = []

    for(let i=0;i<n;i++) {
        currentBoard.push([])
        for(let j=0;j<n;j++) {
            currentBoard[i].push(".")
        }
    }
        
    const backtrack = (row) => {
        if(row === n) {
            const board = currentBoard.reduce((acc, r) => [...acc, r.join(",")], [])
            result.push(board)
            return
        }
        
        for(let col=0;col<n;col++) {
            if(!cols.has(col) && !diag1.has(row-col) && !diag2.has(row+col)) {
                currentBoard[row][col] = "Q"
                cols.add(col)
                diag1.add(row-col)
                diag2.add(row+col)

                backtrack(row+1)

                // revert
                currentBoard[row][col] = "."
                cols.delete(col)
                diag1.delete(row-col)
                diag2.delete(row+col)

            }
        }
    }

    backtrack(0)
    return result
}

const output = nqueens(4)
console.log(output)
