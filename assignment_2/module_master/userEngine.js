const { users } = require('./data');

// MODULE-1: USER PROCESSING ENGINE

/**
 * Get only active users
 * @returns {Array} Active users
 */
function getActiveUsers() {
  return users.filter(user => user.active);
}

/**
 * Extract names of active users
 * @returns {Array} Names of active users
 */
function getActiveUserNames() {
  return users
    .filter(user => user.active)
    .map(user => user.name);
}

/**
 * Check if any admin exists
 * @returns {boolean} True if admin exists
 */
function hasAdmin() {
  return users.some(user => user.role === 'admin');
}

/**
 * Find user by id
 * @param {number} id - User ID
 * @returns {Object|undefined} User object or undefined
 */
function findUserById(id) {
  return users.find(user => user.id === id);
}

/**
 * Deactivate a user immutably
 * @param {number} id - User ID to deactivate
 * @returns {Array} New users array with deactivated user
 */
function deactivateUser(id) {
  return users.map(user => 
    user.id === id ? { ...user, active: false } : user
  );
}

module.exports = {
  getActiveUsers,
  getActiveUserNames,
  hasAdmin,
  findUserById,
  deactivateUser
};