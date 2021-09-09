/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  if(Object.entries(obj).length === 0) return {};
  const picked = {};
  fields.forEach(field => {
    picked[field] = obj[field]
  })

  return picked;
};
