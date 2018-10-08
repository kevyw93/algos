const numIslands = function(grid) {
    let counter = 0;
    function helper(i,j){

        if(!grid[i] || grid[i][j] === "0" || !grid[i][j]) return;
        grid[i][j] = "0";
        helper(i + 1, j);
        helper(i - 1, j);
        helper(i, j + 1);
        helper(i, j - 1);
    }
    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col ++){
            if(grid[row][col] === "1") {
                counter += 1;
                helper(row, col);
            }
        }
    }
    return counter;
};
