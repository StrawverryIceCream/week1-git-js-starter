/**
 * String Utilities
 * Functions for string manipulation and analysis
 */

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} String with first letter capitalized
 */
function capitalize(str) {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
  // TODO: Implement capitalize
  // Hint: Get the first character with str[0] or str.charAt(0)
  // Convert it to uppercase, then concatenate with the rest of the string
  // Don't forget to handle empty strings!
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  return str.split('').reverse().join('');
  // TODO: Implement reverse
  // Hint: Convert string to array with split(''), reverse it, join back
  // Or you can use a loop to build the reversed string
}

/**
 * Checks if a string is a palindrome (reads same forwards and backwards)
 * @param {string} str - Input string
 * @returns {boolean} True if palindrome, false otherwise
 */
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase();
  const reversedStr = reverse(cleanedStr);
  return cleanedStr === reversedStr;

  // TODO: Implement palindrome checker
  // Hint: Convert to lowercase first for case-insensitive comparison
  // Compare the string with its reversed version
  // You can use the reverse function you just wrote!
}

/**
 * Counts the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Number of words
 */
function wordCount(str) {
  const trimmedStr = str.trim();
  if (trimmedStr === '') {
    return 0;
  }
  return trimmedStr.split(/\s+/).length;

  // TODO: Implement word counter
  // Hint: Trim whitespace first, then split by spaces
  // Don't forget to handle empty strings!
  // Be careful with multiple spaces between words
}

// Export all functions
export { capitalize, reverse, isPalindrome, wordCount };
