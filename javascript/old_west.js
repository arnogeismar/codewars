let assert = require("chai").assert;
// How I crossed a mountainous desert the smart way.
//     The directions given to the man are, for example, the following (depending on the language):
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
//     or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
//     [North, South, South, East, West, North, West]
// You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
//     ["WEST"]
// or
// { "WEST" }
// or
//     [West]
function dirReduc(arr) {
    let previous = ""
    let removed;
    do {
        removed = false;
        for(let i=0; i<arr.length; i++) {
            if((arr[i] === "SOUTH" && previous === "NORTH")
                || (arr[i] === "NORTH" && previous === "SOUTH")
                || (arr[i] === "EAST" && previous === "WEST")
                || (arr[i] === "WEST" && previous === "EAST")) {
                arr.splice(i-1, 2);
                removed = true;
            }
            previous = arr[i];
        }
        previous = "";
    } while (removed)
    return arr;
}

const deeepEqual = assert.deepEqual;

function doTest(input, expected) {
    const log = `for ${JSON.stringify(input)}\n`;
    const actual = dirReduc(input);
    deeepEqual(actual, expected, log);
}

describe("Tests", () => {
    it("test", () => {
        doTest(
            ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"],
            "NORTH"
        );
        doTest(
            ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"],
            ["WEST"]
        );
        doTest(
            ["NORTH", "WEST", "SOUTH", "EAST"],
            ["NORTH", "WEST", "SOUTH", "EAST"]
        );
        doTest(
            ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"],
            []
        );
    });
});