// HANDS-ON 3: Enrollment Eligibility Checker
//------------------------------------------

// Initial data:
let hasPaid = true;
let hasCompletedBasics = false;

// 3. Use ternary operator
// 4. Store result in enrollMessage
let enrollMessage = (hasPaid && hasCompletedBasics)
  ? "Enroll Now"
  : "Complete Requirements";

// 5. Print message
console.log(enrollMessage);
