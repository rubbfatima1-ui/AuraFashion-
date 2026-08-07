// Aura Fashion Cart

function loadCart() {

    const cartItemsContainer =
        document.getElementById("cartItems");

    const totalContainer =
        document.querySelector(".cart-total h3");

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItemsContainer.innerHTML =
            "<p>Your cart is empty.</p>";

        return;
    }

    cart.forEach((item, index) => {

        total += item.price;

        const itemDiv =
            document.createElement("div");

        itemDiv.classList.add("product-card");

        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItemsContainer.appendChild(itemDiv);
    });

    totalContainer.textContent =
        `Total: $${total}`;
}

function removeFromCart(index) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}

document.addEventListener(
    "DOMContentLoaded",
    loadCart
);
