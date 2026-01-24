import { reduceProductStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    // 2. Apply discount if coupon provided
    // 3. Validate payment method (card/upi/cod)
    // 4. Process payment (simulate)
    // 5. Reduce stock for all items
    // 6. Clear cart
    // 7. Generate order summary
    const cartItems = getCartItems();
    let cartTotal = getCartTotal();
    let discount = 0;
    let finalTotal = cartTotal;
    if (couponCode) {
        const discountResult = applyDiscount(cartTotal, couponCode, cartItems);
        discount = discountResult.discount;
        finalTotal = discountResult.finalTotal;
    }
    // Simulate payment processing
    const validMethods = ['card', 'upi', 'cod'];
    if (!validMethods.includes(paymentMethod)) {
        return { success: false, message: "Invalid payment method" };
    }
    // Simulate successful payment
    for (const item of cartItems) {
        reduceProductStock(item.product.id, item.quantity);
    }
    clearCart();
    return {
        success: true,
        message: "Payment processed successfully",
        orderSummary: {
            items: cartItems,
            originalTotal: cartTotal,
            discount: discount,
            finalTotal: finalTotal,
            paymentMethod: paymentMethod
        }
    };
}

function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    const validMethods = ['card', 'upi', 'cod'];
    return validMethods.includes(method);
}
function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
}

export { processPayment , validatePaymentMethod, generateOrderId };