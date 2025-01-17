window.addEventListener("load", EventListener);

function EventListener() 
{
    var cart = JSON.parse(localStorage.getItem("cart"));


    var totalPrice = 0;

    if (cart && cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            var createitem = document.createElement("div");
            createitem.innerHTML = `
            <div class="card">
                <img src="${item[4]}" alt="${item[0]}">
                <h1>${item[0]}</h1>
                <h2>${item[1]}</h2>
                <p>Quantity: ${item[2]}</p>
                <p>Size: ${item[3]}</p>
            </div>
            `;
            document.body.appendChild(createitem);

            var price = parseFloat(item[1].replace('Price: $', ''));
            var quantity = parseInt(item[2]);
            totalPrice += price * quantity;
        }
        document.getElementById("totalcost").textContent = `Total Cost: $${totalPrice}`;
    } else {
        var emptyMessage = document.createElement("p");
        emptyMessage.textContent = "Your cart is empty.";
        document.body.appendChild(emptyMessage);
    }
    document.getElementById("clearcart").addEventListener("click", clearCart);
}

function clearCart() 
{
    localStorage.removeItem("cart");
    document.body.innerHTML = `
        <div id="heading"></div>
        
        <a href="mainpage.html"><img id="homebutton" src="homebuttonicon.png"></a>
        <a href="profile.html"><img id="profileimg" src="profileicon.png"></a>
        <a href="cart.html"><img id="cartbutton" src="carticon.png"></a>
        <br><br><br><br>
        <button id="clearcart">Clear Cart</button>
        <br><br><br><br>
        <p id="totalcost">Total Cost: $0.00</p>
        <p>Your cart is empty.</p>
    `;
}
