let assert  = require("chai").assert;

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits), which is narcisstic:
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
//
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
//
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(value) {
    return Array.from(value.toString(), num => Number(num))
        .reduce((previousValue, currentValue, currentIndex, array) => {
            if(currentIndex===1){
                return Math.pow(previousValue, array.length) + Math.pow(currentValue, array.length);
            }
            return previousValue + Math.pow(currentValue, array.length)
        }) === value;
}

describe( "Narcissistic Function", function() {
    it( "should find small numbers are all narcissistic", function() {
        assert.equal(narcissistic( 7 ), true, "7 is narcissistic" );
    });

    it( "should find these numbers are narcissistic", function() {
        assert.equal(narcissistic( 371 ), true, "371 is narcissistic" );
    });
});
