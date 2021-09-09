/**
 * repeatString - Duplicates every char in the string some times according to char index
 * @param {string} str - the string
 * @returns {string} - returns the new string
 */
export const repeatString = (str = '') => {
  return str.split("").map((word, index) => `${word.toUpperCase()}${word.repeat(index)}`).join("-");
}

console.log('repeatString:', repeatString('adsd'));
