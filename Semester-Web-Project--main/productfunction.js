window.addEventListener("load", EventListener);

function EventListener() {
    document.getElementById("addtocart").addEventListener("click", addProduct);
}

function addProduct() {
    var productname = document.getElementById("productname").textContent;
    var productprice = document.getElementById("h2price").textContent;
    var productquantity = document.getElementById("select[name='Quantity']").value;
    var productsize = document.getElementById("select[name='size']").value;
    var productimage = document.getElementById("product1").src;
    var product = [productname, productprice, productquantity, productsize, productimage];
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added successfully");
    window.location.href = "cart.html";
}
