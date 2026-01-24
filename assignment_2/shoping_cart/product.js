const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
];

function getProductById(id) {
    // Find and return product by ID
    return products.find(product => product.id === id);
}

function getAllProducts() {
    // Return all products
    return products;
}
// Filter products by category
function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}
// Search products by name (case-insensitive)
function searchProductsByName(name) {
    return products.filter(product => product.name.toLowerCase().includes(name.toLowerCase()));
}
// Check if product has enough stock
// Return true/false
function isProductInStock(id, quantity) {
    const product = getProductById(id);
    return product && product.stock >= quantity;
}
// Reduce product stock after purchase
function reduceProductStock(id, quantity) {
    const product = getProductById(id);
    if (product && product.stock >= quantity) {
        product.stock -= quantity;
        return true;
    }
    return false;
}
export { getProductById, getAllProducts, getProductsByCategory, searchProductsByName, isProductInStock, reduceProductStock };