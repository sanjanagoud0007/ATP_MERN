const { roles } = require('./data');

// MODULE 4: ROLE & PERMISSION ENGINE

/**
 * Get all role names
 * @returns {Array} Array of role names
 */
function getAllRoleNames() {
  return Object.keys(roles);
}

/**
 * Check if student can delete
 * @returns {boolean} True if student has delete permission
 */
function canStudentDelete() {
  return roles.student && roles.student.includes('delete');
}

/**
 * Create a flat list of all unique permissions
 * @returns {Array} Array of unique permissions
 */
function getAllUniquePermissions() {
  const allPermissions = Object.values(roles).flat();
  return [...new Set(allPermissions)];
}

/**
 * Add new role moderator immutably
 * @param {Array} permissions - Permissions for moderator role
 * @returns {Object} New roles object with moderator added
 */
function addModeratorRole(permissions = ["create", "update", "view"]) {
  return {
    ...roles,
    moderator: permissions
  };
}

module.exports = {
  getAllRoleNames,
  canStudentDelete,
  getAllUniquePermissions,
  addModeratorRole
};