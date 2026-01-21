// ASSIGNMENT 5: Bank Transaction Analyzer
//---------------------------------------

// Test Data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. filter() credit transactions
let t1 = transactions.filter(tx => tx.type === "credit");
console.log(t1);

// 2. map() to extract amounts
let t2 = transactions.map(tx => tx.amount);
console.log(t2);

// 3. reduce() final account balance
let t3 = transactions.reduce((balance, tx) => {
  return tx.type === "credit"
    ? balance + tx.amount
    : balance - tx.amount;
}, 0);
console.log(t3);

// 4. find() first debit transaction
let t4 = transactions.find(tx => tx.type === "debit");
console.log(t4);

// 5. findIndex() of amount 10000
let t5 = transactions.findIndex(tx => tx.amount === 10000);
console.log(t5);