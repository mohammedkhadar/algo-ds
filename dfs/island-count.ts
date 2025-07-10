const islandCount = (input) => {
    const rows = input.length
    const cols = input[0].length

    const dfs = (i, j) => {
        if(
            i < 0  || 
            i >= rows || 
            j >= cols || 
            j < 0 || 
            input[i][j] === 0
        ) {
            return
        }

        input[i][j] = 0

        dfs(i-1, j) //up
        dfs(i+1,j) //down
        dfs(i,j+1) //right
        dfs(i, j-1) //left
    }
    

    //scan
    let count = 0;
    for (let i=0;i<rows;i++) {
        for(let j=0;j<cols;j++) {
            if(input[i][j] === 1) {
                dfs(i, j)
                count += 1
            }
        }
    }

    return count
}

const input = [
    [ 1, 1, 0, 0 ],
    [ 1, 0, 0, 0 ],
    [ 0, 0, 1, 1 ],
    [ 0, 0, 0, 1 ]
]

console.log(islandCount(input))