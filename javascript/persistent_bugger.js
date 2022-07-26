const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

// Write a function, persistence,
// that takes in a positive parameter num and returns its multiplicative persistence,
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    if(num<10) return 0;
    let count = 0;
    while (num >= 10) {
        num = num.toString().split('').reduce((previousValue, currentValue) => previousValue*currentValue)
        count++
    }
    return count;
}

describe("Persistent Bugger.", () => {
    it("Fixed tests", () => {
        assert.strictEqual(persistence(39),3);
        assert.strictEqual(persistence(4),0);
        assert.strictEqual(persistence(25),2);
        assert.strictEqual(persistence(999),4);
    });
});