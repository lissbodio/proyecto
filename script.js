document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.getElementById("btn-menu");
    const btnCart = document.getElementById("btn-cart");
    const menu = document.getElementById("menu");
    const cart = document.getElementById("cart");
    const menuList = document.querySelectorAll(".add-to-cart");
    const cartList = document.getElementById("cart-list");
    const cartTotal = document.getElementById("cart-total");
    const btnPurchase = document.getElementById("btn-purchase");
    const btnHome = document.getElementById("btn-home");

    btnHome.addEventListener("click", function() {
        window.location.href = "index.html"; // Cambia "index.html" por la URL de tu página principal si es diferente
    });
    btnMenu.addEventListener("click", function() {
        menu.style.display = "block";
        cart.style.display = "none";
    });

    btnCart.addEventListener("click", function() {
        menu.style.display = "none";
        cart.style.display = "block";
    });

    menuList.forEach(item => {
        item.addEventListener("click", function(event) {
            const itemName = event.target.getAttribute("data-item");
            const itemPrice = parseInt(event.target.parentElement.textContent.match(/\d+/)[0]);
            addToCart(itemName, itemPrice);
        });
    });

    function addToCart(name, price) {
        const listItem = document.createElement("li");
        listItem.textContent = `${name} - $${price}`;
        cartList.appendChild(listItem);

        const currentTotal = parseInt(cartTotal.textContent);
        cartTotal.textContent = currentTotal + price;
    }

    btnPurchase.addEventListener("click", function() {
        alert("¡Gracias por su compra!");
        cartList.innerHTML = ""; // Limpiar carrito después de la compra
        cartTotal.textContent = "0"; // Reiniciar total a cero
    });
});