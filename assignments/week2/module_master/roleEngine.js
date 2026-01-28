
// MODULE 4: ROLE & PERMISSION ENGINE

// Local data
const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

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

// Run and display outputs
console.log('\n ROLE ENGINE ');
console.log('All Role Names:', getAllRoleNames());
console.log('Can Student Delete:', canStudentDelete());
console.log('All Unique Permissions:', getAllUniquePermissions());
console.log('\nRoles with Moderator Added:');
console.log(addModeratorRole());

module.exports = {
  getAllRoleNames,
  canStudentDelete,
  getAllUniquePermissions,
  addModeratorRole
};