// Get elements from the HTML
const coinCountElement = document.getElementById('coin-count');
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
let coins = 20; // Initial coin count

// Function to update the coin count display
function updateCoinCount() {
  coinCountElement.textContent = coins + ' OC';
}

// Function to add an item to the cart
function addToCart(item) {
  const price = parseInt(item.dataset.price); // Get item price
  coins -= price; // Update coin count

  // Create a new cart item element
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <img src="${item.querySelector('img').src}" alt="${item.querySelector('p').textContent}">
    <p>${item.querySelector('p').textContent}</p>
    <p>Price: ${price} OC</p>
  `;
  cartItemsElement.appendChild(cartItem);

  // Update the total price
  updateTotalPrice();
  updateCoinCount();
}

// Function to update the total price display
function updateTotalPrice() {
  let totalPrice = 0;
  const cartItems = cartItemsElement.querySelectorAll('.cart-item');
  cartItems.forEach(item => {
    const priceElement = item.querySelector('p:nth-child(3)'); // Get price element
    const price = parseInt(priceElement.textContent.split(': ')[1]); // Extract price
    totalPrice += price;
  });
  totalPriceElement.textContent = `Total: ${totalPrice} OC`;
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    addToCart(button.parentElement);
  });
});

// Initial coin count display
updateCoinCount();
