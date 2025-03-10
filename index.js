let cart = [];

// Load cart from localStorage
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
}

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Check if product already exists in cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}