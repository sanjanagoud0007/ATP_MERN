const { cart, courses } = require('./data');

// MODULE 3: SHOPPING CART ENGINE

/**
 * Merge cart with courses to get full course info
 * @returns {Array} Cart items with full course information
 */
function getCartWithCourseInfo() {
  return cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return {
      ...item,
      ...course
    };
  });
}

/**
 * Calculate total cart amount
 * @returns {number} Total amount in cart
 */
function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const course = courses.find(c => c.id === item.courseId);
    return total + (course ? course.price * item.qty : 0);
  }, 0);
}

/**
 * Increase quantity of a course (immutably)
 * @param {number} courseId - Course ID
 * @param {number} increment - Amount to increase (default 1)
 * @returns {Array} New cart array with updated quantity
 */
function increaseQuantity(courseId, increment = 1) {
  return cart.map(item =>
    item.courseId === courseId
      ? { ...item, qty: item.qty + increment }
      : item
  );
}

/**
 * Remove a course from cart
 * @param {number} courseId - Course ID to remove
 * @returns {Array} New cart array without the course
 */
function removeCourseFromCart(courseId) {
  return cart.filter(item => item.courseId !== courseId);
}

/**
 * Check if all cart items are paid courses
 * @returns {boolean} True if all cart items are published (paid)
 */
function areAllCartItemsPaid() {
  return cart.every(item => {
    const course = courses.find(c => c.id === item.courseId);
    return course && course.published;
  });
}

module.exports = {
  getCartWithCourseInfo,
  calculateCartTotal,
  increaseQuantity,
  removeCourseFromCart,
  areAllCartItemsPaid
};