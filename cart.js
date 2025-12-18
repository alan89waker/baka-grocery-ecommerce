let cart = [];

// Function to add items to the cart
function addToCart(productName) {
    cart.push(productName);
    updateCart();
}

// Function to update cart count and display selected items
function updateCart() {
    let cartCount = document.getElementById("cart-count");
    let cartItemsList = document.getElementById("cart-items");

    // Update cart count
    cartCount.innerText = cart.length;
    cartCount.style.display = cart.length > 0 ? "inline-block" : "none";

    // Update cart dropdown
    cartItemsList.innerHTML = "";
    cart.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        cartItemsList.appendChild(li);
    });
}

// Function to show/hide the cart dropdown
function toggleCart() {
    let cartDropdown = document.getElementById("cart-dropdown");
    cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
}

// Function to clear cart
function clearCart() {
    cart = [];
    updateCart();
    toggleCart();
}