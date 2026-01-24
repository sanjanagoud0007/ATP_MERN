// ASSIGNMENT 1: Shopping Cart Summary
//----------------------------------

// Test Data:
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. filter() only inStock products
let r1 = cart.filter(item => item.inStock);
console.log(r1);

// 2. map() → { name, totalPrice }
let r2 = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log(r2);

// 3. reduce() → grand total cart value
let r3 = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(r3);

// 4. find() details of "Mouse"
let r4 = cart.find(item => item.name === "Mouse");
console.log(r4);

// 5. findIndex() position of "Keyboard"
let r5 = cart.findIndex(item => item.name === "Keyboard");
console.log(r5);