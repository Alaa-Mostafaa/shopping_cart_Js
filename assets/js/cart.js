//If the user is logged in, he can see the shopping cart. If not, he will go to the login page.
if (localStorage.getItem("user_email") == null) {
  window.location.assign("login.html");
} else {
  // Get user
  const user = localStorage.getItem("user_email");
  var cart;
  if (localStorage.getItem("cart") == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  // This function is used to display products of cart ( depending on the user )
  function displayIncart() {
    var box = "";
    var price = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));

    for (var i = 0; i < cart.length; i++) {
      if (cart[i].email === user) {
        box += `
        <div class="shadow-sm p-4 rounded-3 mt-3 bg-body-tertiary">
                   <div class="row d-flex justify-content-center align-items-center text-center p-4">
                       <div class="col-md-3">
                           <img src="assets/images/${cart[i].image}.jpg" class="w-100" />
                       </div>
                       <div class="col-md-3 ">
                           <span>${cart[i].name}</span>
                       </div>
  
                       <div class="col-md-3">
                           <span>${cart[i].price} EGP</span>
                       </div>
                       <div class="col-md-3">
                           <button class="btn btn-danger" id="${i}" onclick="deletee(${i})">Delete</button>
                       </div>
                   </div>
               </div>
  `;

        price += cart[i].price;
      }
    }
    // If the cart is empty
    if (box === "") {
      document.getElementById("cart").style.display = "none";
      document.querySelector("#empty").style.display = "block";
    } else {
      document.getElementById("showw").innerHTML = box;
      document.getElementById("total").innerHTML = price + 30;
      document.getElementById("subtotal").innerHTML = price;
    }
  }
  // Call display function
  displayIncart();
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("success-message").style.display = "none";
  displayIncart();
});

// This function is used to delete a specific product
function deletee(index) {
  // use splice to delete specific product by using its index then update the localstorage with the latest products then display all the products
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("success-message").style.display = "flex";
}
