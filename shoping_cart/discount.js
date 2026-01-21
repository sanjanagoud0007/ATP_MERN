const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

function validateCoupon(couponCode, cartTotal, cartItems) {
    // 1. Check if coupon exists
    if (!coupons[couponCode]) {
        return { valid: false, message: "Invalid coupon code" };
    }
    const coupon = coupons[couponCode];

    // 2. Check minimum amount requirement
    if (cartTotal < coupon.minAmount) {
        return { valid: false, message: `Minimum cart amount of ₹${coupon.minAmount} required` };
    }

    // 3. Check category requirement (if any)
    if (coupon.category) {
        const hasCategoryItem = cartItems.some(item => item.product.category === coupon.category);
        if (!hasCategoryItem) {
            return { valid: false, message: `Coupon applicable only on ${coupon.category} category` };
        }
    }
    return { valid: true, message: "Coupon is valid" };
}

function calculateDiscount(couponCode, cartTotal) {
    // Calculate discount amount based on coupon type
    // Return discount amount
    const coupon = coupons[couponCode];
    let discount = 0;
    if (coupon.type === 'percentage') {
        discount = (coupon.value / 100) * cartTotal;
    } else if (coupon.type === 'flat') {
        discount = coupon.value;
    }
    return discount;

}


function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    const validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
        return {
            originalTotal: cartTotal,
            discount: 0,
            finalTotal: cartTotal,
            message: validation.message
        };
    }
    // Calculate and apply discount when valid
    const discount = calculateDiscount(couponCode, cartTotal);
    return {
        originalTotal: cartTotal,
        discount: discount,
        finalTotal: cartTotal - discount,
        message: "Discount applied successfully"
    };
}
export { calculateDiscount, applyDiscount, validateCoupon };