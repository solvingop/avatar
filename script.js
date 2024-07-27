document.addEventListener('DOMContentLoaded', () => {
    let totalCoins = 20;
    const cartItems = [];
    const cartTotal = document.getElementById('cart-total');
    const cartItemsList = document.getElementById('cart-items');
    
    const updateCartTotal = () => {
        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `${total} OC`;
    };

    const addItemToCart = (name, price) => {
        cartItems.push({ name, price });
        const li = document.createElement('li');
        li.textContent = `${name} - ${price} OC`;
        cartItemsList.appendChild(li);
        updateCartTotal();
    };

    document.querySelectorAll('.avatar, .pet').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.getAttribute('data-name');
            const price = parseInt(item.getAttribute('data-price'), 10);
            if (totalCoins >= price) {
                totalCoins -= price;
                document.getElementById('total-coins').textContent = `${totalCoins} OC`;
                addItemToCart(name, price);
            } else {
                alert('Not enough coins!');
            }
        });
    });
});
