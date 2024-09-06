let cart = [];
let cartCount = 0;

function addToCart(productName, price, sizeId) {
    // Leia valitud suurus
    const selectedSize = document.getElementById(sizeId).value;
    
    // Lisa toode koos suurusega ostukorvi
    cart.push({ name: productName, price: price, size: selectedSize });
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    displayCartItems();
}

function displayCartItems() {
    let cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '<h3>Ostukorv</h3>';
    
    let total = 0;
    cart.forEach((item) => {
        cartItemsDiv.innerHTML += `<p>${item.name} (Suurus: ${item.size}) - ${item.price}€</p>`;
        total += item.price;
    });
    
    cartItemsDiv.innerHTML += `<p><strong>Kokku: ${total}€</strong></p>`;
}
