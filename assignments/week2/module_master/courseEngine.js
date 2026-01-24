const { courses } = require('./data');

// MODULE 2: COURSE CATALOG ENGINE

/**
 * Get published courses
 * @returns {Array} Published courses
 */
function getPublishedCourses() {
  return courses.filter(course => course.published);
}

/**
 * Sort courses by price (high → low)
 * @returns {Array} Courses sorted by price descending
 */
function sortCoursesByPrice() {
  return [...courses].sort((a, b) => b.price - a.price);
}

/**
 * Extract { title, price } only
 * @returns {Array} Array of objects with title and price
 */
function extractTitleAndPrice() {
  return courses.map(({ title, price }) => ({ title, price }));
}

/**
 * Calculate total value of published courses
 * @returns {number} Total value of published courses
 */
function calculatePublishedCoursesValue() {
  return courses
    .filter(course => course.published)
    .reduce((total, course) => total + course.price, 0);
}

/**
 * Add a new course immutably
 * @param {Object} newCourse - New course to add
 * @returns {Array} New courses array with added course
 */
function addCourse(newCourse) {
  return [...courses, newCourse];
}

module.exports = {
  getPublishedCourses,
  sortCoursesByPrice,
  extractTitleAndPrice,
  calculatePublishedCoursesValue,
  addCourse
};