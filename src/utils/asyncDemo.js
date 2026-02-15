/**
 * Asynchronous Programming Demo
 * Examples of callbacks, promises, and async/await patterns hello 
 */

// ============================================
// 1. CALLBACKS
// ============================================

/**
 * Simulates fetching user data with a callback
 * @param {number} userId - User ID to fetch
 * @param {function} callback - Callback function (error, data)
 */
function fetchUserCallback(userId, callback) {
  console.log(`Fetching user ${userId}...`);

  // Simulate network delay with setTimeout
  setTimeout(() => {
    // TODO: Complete this callback example
    // Hint: Call the callback with (null, userData) for success
    // or (error, null) for failure

    if (userId > 0) {
      const userData = {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
      };
      callback(null, userData); // Call callback with success data
      // Call callback with success data
    } else {
      callback(new Error("Invalid user ID"), null); // Call callback with error
      // Call callback with error
    }
  }, 1000);
}

/**
 * Demonstrates callback pattern
 */
function demonstrateCallbacks() {
  console.log('\n=== Callback Demo ===');
  fetchUserCallback(1, (error, data) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Success:', data);
    }
  });
  
  fetchUserCallback(-1, (error, data) => {
    if (error) {
      console.error('Error:', error.message);
    } else {
      console.log('Success:', data);
    }
  });
  // TODO: Call fetchUserCallback and handle the result
  // Hint: Pass a callback function that logs the result or error
}

// ============================================
// 2. PROMISES
// ============================================

/**
 * Simulates fetching user data with a Promise
 * @param {number} userId - User ID to fetch
 * @returns {Promise} Promise that resolves with user data
 */
function fetchUserPromise(userId) {
  console.log(`Fetching user ${userId}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // TODO: Complete this promise example
      // Hint: Use resolve(userData) for success
      // Use reject(error) for failure

      if (userId > 0) {
        const userData = {
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        };
        resolve(userData); // Resolve with user data
        // Resolve with user data
      } else {
        reject(new Error("Invalid user ID")); // Reject with error
        // Reject with error
      }
    }, 1000);
  });
}

/**
 * Demonstrates promise pattern with .then() and .catch()
 */
function demonstratePromises() {
  console.log('\n=== Promise Demo ===');
  
  // TODO: Call fetchUserPromise and chain .then() and .catch()
  // Hint: Use .then() to handle success and .catch() to handle errors
  // Log the results to console

  fetchUserPromise(1)
    .then(userData => {
      console.log('User data fetched successfully:', userData);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
    
}

// ============================================
// 3. ASYNC/AWAIT
// ============================================

/**
 * Creates a delay using promises
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  // TODO: Return a promise that resolves after ms milliseconds
  // Hint: Use setTimeout inside a Promise
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetches multiple users sequentially using async/await
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchMultipleUsers(userIds) {
  // TODO: Implement this using async/await
  // Hint: Use a loop and await fetchUserPromise for each ID
  // Use try/catch to handle errors
  // Return an array of all user data
  const users = [];
  for (const id of userIds) {
    try {
      const userData = await fetchUserPromise(id);
      users.push(userData);
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error);
    }
  }
  return users;
}

/**
 * Demonstrates async/await pattern
 */
async function demonstrateAsyncAwait() {
  console.log('\n=== Async/Await Demo ===');
  // TODO: Call fetchMultipleUsers with an array of user IDs
  // Use try/catch to handle any errors
  // Log the results
  try {
    const users = await fetchMultipleUsers([1, 2, 3]);
    console.log('Fetched users:', users);
  } catch (error) {
    console.error('Error in async/await demo:', error);
  }
}

// ============================================
// BONUS: Promise.all()
// ============================================

/**
 * Fetches multiple users in parallel using Promise.all()
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} Array of user data
 */
async function fetchUsersParallel(userIds) {
  // TODO: Implement this using Promise.all()
  // Hint: Map userIds to promises, then use Promise.all()
  // This is faster than sequential fetching!
  const userPromises = userIds.map(id => fetchUserPromise(id));
  try {
    const users = await Promise.all(userPromises);
    return users;
  } catch (error) {
    console.error('Error fetching users in parallel:', error);
    throw error; // Re-throw error to be handled by caller
  }
}


// Export functions
export {
  fetchUserCallback,
  demonstrateCallbacks,
  fetchUserPromise,
  demonstratePromises,
  delay,
  fetchMultipleUsers,
  demonstrateAsyncAwait,
  fetchUsersParallel,
};
