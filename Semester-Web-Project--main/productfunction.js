window.addEventListener("load", EventListener);

function EventListener() {
    document.getElementById("addtocart").addEventListener("click", addProduct);
}

function addProduct() {
    var productname = document.getElementById("productname").textContent;
    var productprice = document.getElementById("h2price").textContent;
    var productquantity = document.querySelector("select[name='Quantity']").value;
    var productsize = document.querySelector("select[name='size']").value;
    var productimage = document.getElementById("product1").src;

    var product = [productname, productprice, productquantity, productsize, productimage];

    // Retrieve existing cart from localStorage or initialize as empty array
    var cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new product to cart
    cart.push(product);

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added successfully");
    window.location.href = "cart.html";
}