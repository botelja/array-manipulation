/**
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 */

const chunck = (array, size=1) => {
    
    const result = [];

    for (let i = 0; i < array.length; i += size) {
        let chunck = array.slice(i, i + size);
        result.push(chunck);
    }

    return result;
    
}

