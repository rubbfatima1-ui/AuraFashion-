// Aura Fashion Products

const products = [
    {
        id: 1,
        name: "Women's Dress",
        price: 25,
        category: "Women"
    },
    {
        id: 2,
        name: "Men's Shirt",
        price: 20,
        category: "Men"
    },
    {
        id: 3,
        name: "Kids Outfit",
        price: 15,
        category: "Kids"
    },
    {
        id: 4,
        name: "Sneakers",
        price: 30,
        category: "Footwear"
    }
];

const productContainer = document.querySelector(".product-grid");

if (productContainer) {
    productContainer.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `;

        productContainer.appendChild(card);
    });
}

function addToCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const selectedProduct =
        products.find(product => product.id === productId);

    cart.push(selectedProduct);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
}
