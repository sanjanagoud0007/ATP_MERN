// Main Application - Demonstrating all Engine Modules

const userEngine = require('./userEngine');
const courseEngine = require('./courseEngine');
const cartEngine = require('./cartEngine');
const roleEngine = require('./roleEngine');

console.log('='.repeat(60));
console.log('MODULE-1: USER PROCESSING ENGINE');
console.log('='.repeat(60));

console.log('\n1. Active Users:');
console.log(userEngine.getActiveUsers());

console.log('\n2. Active User Names:');
console.log(userEngine.getActiveUserNames());

console.log('\n3. Has Admin?', userEngine.hasAdmin());

console.log('\n4. Find User by ID (2):');
console.log(userEngine.findUserById(2));

console.log('\n5. Deactivate User (1):');
console.log(userEngine.deactivateUser(1));

console.log('\n' + '='.repeat(60));
console.log('MODULE 2: COURSE CATALOG ENGINE');
console.log('='.repeat(60));

console.log('\n1. Published Courses:');
console.log(courseEngine.getPublishedCourses());

console.log('\n2. Courses Sorted by Price (High → Low):');
console.log(courseEngine.sortCoursesByPrice());

console.log('\n3. Extract Title and Price:');
console.log(courseEngine.extractTitleAndPrice());

console.log('\n4. Total Value of Published Courses:');
console.log('₹' + courseEngine.calculatePublishedCoursesValue());

console.log('\n5. Add New Course:');
const newCourse = { id: 104, title: "MongoDB", price: 1199, published: true };
console.log(courseEngine.addCourse(newCourse));

console.log('\n' + '='.repeat(60));
console.log('MODULE 3: SHOPPING CART ENGINE');
console.log('='.repeat(60));

console.log('\n1. Cart with Full Course Info:');
console.log(cartEngine.getCartWithCourseInfo());

console.log('\n2. Total Cart Amount:');
console.log('₹' + cartEngine.calculateCartTotal());

console.log('\n3. Increase Quantity of Course (101) by 2:');
console.log(cartEngine.increaseQuantity(101, 2));

console.log('\n4. Remove Course from Cart (103):');
console.log(cartEngine.removeCourseFromCart(103));

console.log('\n5. Are All Cart Items Paid?', cartEngine.areAllCartItemsPaid());

console.log('\n' + '='.repeat(60));
console.log('MODULE 4: ROLE & PERMISSION ENGINE');
console.log('='.repeat(60));

console.log('\n1. All Role Names:');
console.log(roleEngine.getAllRoleNames());

console.log('\n2. Can Student Delete?', roleEngine.canStudentDelete());

console.log('\n3. All Unique Permissions:');
console.log(roleEngine.getAllUniquePermissions());

console.log('\n4. Add Moderator Role:');
console.log(roleEngine.addModeratorRole());

console.log('\n' + '='.repeat(60));
console.log('ALL MODULES EXECUTED SUCCESSFULLY!');
console.log('='.repeat(60));