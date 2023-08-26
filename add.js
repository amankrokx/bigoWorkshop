// 

console.log("Bawal package is loaded as module es6")


/**
 * @description Adds two numbers
 * @param {number} a Firest number to add
 * @param {number} b Second number to add
 * @returns {number} Sum of a and b
 * 
 * @example
 * const a = 123
 * const b = 456
 * let result = BawalSum(a, b)
 * 
 */
function BawalSum (a, b) {
    return a + b
}

function BawalSubtract (a, b) {
    return a - b
}

export {
    BawalSubtract, BawalSum
}

