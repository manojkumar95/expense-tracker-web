const isEmpty = value => value === null || (typeof value === 'string' && value.trim()) === '';

/**
 * To check whether the value exists
 * @param {string} value
 * @return {string} error message
 */
export function required(value) {
  return isEmpty(value) ? 'is required' : '';
}

/**
 * To check whether the array is empty or not
 * @param {string} value
 * @return {string} error message
 */
export function isEmptyArray(value) {
  return !isEmpty(value) && value.length > 0 ? '' : 'is required';
}

/**
 * To check whether the phone number is valid
 * @param {string} value
 * @return {string} error message
 */
export function validatePhoneNumber(value) {
  return !isEmpty(value) && !/^\d{8,18}$/i.test(value.trim()) ? 'must be between 8 - 18 characters' : '';
}

/**
 * To check whether the value should be a whole number
 * @param {string} value
 * @return {string} error message
 */
export function integer(value) {
  return (!isEmpty(value) && !Number.isInteger(Number(value))) ? 'must be an number' : '';
}
