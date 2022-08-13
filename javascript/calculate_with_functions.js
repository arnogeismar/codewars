let assert  = require("chai").assert;
let oper = {
    "*": (left, right) => {return left*right},
    "/": (left, right) => {return Math.floor(left/right)},
    "+": (left, right) => {return left+right},
    "-": (left, right) => {return left-right}
}
function zero(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](0, parseInt(charArr[1]));
    }
    return 0;
}
function one(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](1, parseInt(charArr[1]));
    }
    return 1;
}
function two(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](2, parseInt(charArr[1]));
    }
    return 2;
}
function three(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](3, parseInt(charArr[1]));
    }
    return 3;
}
function four(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](4, parseInt(charArr[1]));
    }
    return 4;
}
function five(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](5, parseInt(charArr[1]));
    }
    return 5;
}
function six(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](6, parseInt(charArr[1]));
    }
    return 6;
}
function seven(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](7, parseInt(charArr[1]));
    }
    return 7;
}
function eight(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](8, parseInt(charArr[1]));
    }
    return 8;
}
function nine(operation) {
    if(operation) {
        let charArr = operation.split(" ");
        return oper[charArr[0]](9, parseInt(charArr[1]));
    }
    return 9;
}

function plus(rightOperand) {
    return "+ " + rightOperand;
}
function minus(rightOperand) {
    return "- " + rightOperand;
}
function times(rightOperand) {
    return "* " + rightOperand;
}
function dividedBy(rightOperand) {
    return "/ " + rightOperand;
}

describe("Tests", () => {
    it("test", () => {
        assert.equal(seven(times(five())), 35);
        assert.equal(four(plus(nine())), 13);
        assert.equal(eight(minus(three())), 5);
        assert.equal(six(dividedBy(two())), 3);
    });
});
