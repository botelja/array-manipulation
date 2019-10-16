/**
 * @param {Array} array The array to compact.
 * @returns {Array}  Returns the new array of filtered values.
 */

const compact = (array) => {
    let result = [];

    result = array.filter(item => item)

    return result;
}

console.log(compact([0, 1, false, 2, '', 3]));