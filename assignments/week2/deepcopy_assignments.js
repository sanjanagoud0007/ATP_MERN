//Hands-On 2: Deep Copy (Isolation & Safety Use Case)

const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
    }
   },
    items: [{ product: "Laptop", price: 70000 }]
};

//Task:
//1. Create a deep copy of order
let orderCopy=structuredClone(order)
//2. Modify in copied object:
//i. customer.address.city
orderCopy.customer.address.city='pune'
//ii. items[0].price
orderCopy.items[0].price=65000
//iii. Verify original object remains unchanged
console.log("order:",order)
console.log("orderCopy:",orderCopy)