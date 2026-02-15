/**
 * Math Utilities
 * Basic mathematical operations for learning JavaScript functions
 */

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
  // TODO: Implement addition
  // Hint: Return the sum of a and b
}

/**
 * Subtracts b from a
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
  // TODO: Implement subtraction
  // Hint: Return a minus b
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
  // TODO: Implement multiplication
  // Hint: Return the product of a and b
}

/**
 * Divides a by b
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a and b
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
  // TODO: Implement division
  // Hint: Check if b is zero first to avoid division by zero error
  // Return an appropriate value or throw an error if b is zero
}

/**
 * Raises base to the power of exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the power of exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
  // TODO: Implement exponentiation
  // Hint: Use Math.pow() or the ** operator
}

// Export all functions
export { add, subtract, multiply, divide, power };
