//ASSIGNMENT 1:
 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Use filter() to get only inStock products
let r1=cart.filter(cartObj=>cartObj.inStock)
console.log(r1)

//2. Use map() to create a new array with:  { name, totalPrice }
let r2=cart.map(cartObj=>({name:cartObj.name,tp:cartObj.price*cartObj.quantity}))
console.log(r2)

//3. Use reduce() to calculate grand total cart value
let r3=cart.reduce((acc,cartObj)=>acc+cartObj.price,0)
console.log(r3)

//4. Use find() to get details of "Mouse"
let r4=cart.find(cartObj=>cartObj.name==='Mouse')
console.log(r4)

//5. Use findIndex() to find the position of "Keyboard"
let r5=cart.findIndex(cartObj=>cartObj.name==="Keyboard")
console.log(r5)
