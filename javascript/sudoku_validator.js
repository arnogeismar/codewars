let assert  = require("chai").assert;
// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)
//
//     Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.
//
// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

function validSolution(board){
    const validInputs = [1,2,3,4,5,6,7,8,9]
    let squares = [
        [board[0].slice(0, 3), board[1].slice(0,3), board[2].slice(0,3)],
        [board[0].slice(3, 6), board[1].slice(3,6), board[2].slice(3,6)],
        [board[0].slice(6, 9), board[1].slice(6,9), board[2].slice(6,9)],

        [board[3].slice(0, 3), board[4].slice(0,3), board[5].slice(0,3)],
        [board[3].slice(3, 6), board[4].slice(3,6), board[5].slice(3,6)],
        [board[3].slice(6, 9), board[4].slice(6,9), board[5].slice(6,9)],

        [board[6].slice(0, 3), board[7].slice(0,3), board[8].slice(0,3)],
        [board[6].slice(3, 6), board[7].slice(3,6), board[8].slice(3,6)],
        [board[6].slice(6, 9), board[7].slice(6,9), board[8].slice(6,9)],
    ];
    //square check
    for(let i=0; i<squares.length; i++) {
        let square=[];
        for(let a=0; a<squares[i].length;a++) {
            for(let c=0; c<squares[i][a].length; c++) {
                square.push(squares[i][a][c])
            }
        }
        let result =
            validInputs.length === square.length &&
            validInputs.every(function (element) {
                return square.includes(element);
            });
        if(!result) return false;
        square = [];
    }

    for(let i=0; i<board.length; i++) {
        //row check
        let row = board[i];
        let resultRow =
            validInputs.length === row.length &&
            validInputs.every(function (element) {
                return row.includes(element);
            });
        if(!resultRow) return false;

        //column check
        let column = [];
        for(let e=0; e<board.length; e++) {
            column.push(board[e][i]);
        }
        let resultColumn =
            validInputs.length === column.length &&
            validInputs.every(function (element) {
                return column.includes(element);
            });
        if(!resultColumn) return false;
    }
    return true;
}

describe("Tests", () => {
    it("test", () => {
        // assert.equal(validSolution([[1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
        //     [1, 2, 3, 4, 5, 6, 7, 8, 9]]), false);

        assert.equal(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

        // assert.equal(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
        //     [6, 7, 2, 1, 9, 0, 3, 4, 8],
        //     [1, 0, 0, 3, 4, 2, 5, 6, 0],
        //     [8, 5, 9, 7, 6, 1, 0, 2, 0],
        //     [4, 2, 6, 8, 5, 3, 7, 9, 1],
        //     [7, 1, 3, 9, 2, 4, 8, 5, 6],
        //     [9, 0, 1, 5, 3, 7, 2, 1, 4],
        //     [2, 8, 7, 4, 1, 9, 6, 3, 5],
        //     [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);
    });
});