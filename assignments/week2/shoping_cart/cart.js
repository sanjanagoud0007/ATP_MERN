import { getProductById, isProductInStock } from './product.js';
let cartItems = [];

function addToCart(productId, quantity) {
    // 1. Get product details 
    const product = getProductById(productId);
    if (!product) {
        return "Product not found";
    }

    // 2. Check stock availability
    if (!isProductInStock(productId, quantity)) {
        return "Insufficient stock";
    }

    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    const cartItem = cartItems.find(item => item.product.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cartItems.push({ product: product, quantity: quantity });
    }
    return "Product added to cart";   // 4. Return success/error message
}

function removeFromCart(productId) {
    // Remove product from cart
    cartItems = cartItems.filter(item => item.product.id !== productId);
    return "Product removed from cart";
}

function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
    const cartItem = cartItems.find(item => item.product.id === productId);
    if (!cartItem) {
        return "Product not in cart";
    }
    if (!isProductInStock(productId, newQuantity)) {
        return "Insufficient stock";
    }
    cartItem.quantity = newQuantity;
    return "Quantity updated";
}

function getCartItems() {
    // Return all cart items with product details
    return cartItems;
}

function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    let total = 0;
    for (const item of cartItems) {
        total += item.product.price * item.quantity;
    }
    return total;
}

function clearCart() {
    // Empty the cart
    cartItems = [];
    return "Cart cleared";
}

export { addToCart, removeFromCart, updateQuantity, getCartItems, getCartTotal, clearCart };