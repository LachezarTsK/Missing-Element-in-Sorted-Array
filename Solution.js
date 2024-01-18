
/**
 * @param {number[]} input
 * @param {number} target
 * @return {number}
 */
var missingElement = function (input, target) {
    let left = 0;
    let right = input.length - 1;

    while (left <= right) {
        let middlePoint = left + Math.floor((right - left) / 2);

        if (target > missingElementsTillCurrentIndex(input, middlePoint)) {
            left = middlePoint + 1;
        } else {
            right = middlePoint - 1;
        }
    }
    return input[0] + right + target;
};

/**
 * @param {number[]} input
 * @param {number} index
 * @return {number}
 */
function missingElementsTillCurrentIndex(input, index) {
    let expectedNumberOfPreceedingElements = input[index] - input[0];
    return expectedNumberOfPreceedingElements - index;
}
