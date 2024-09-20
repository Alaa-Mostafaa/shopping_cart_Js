if (localStorage.getItem("user_email") == null) {
  window.location.assign("login.html");
} else {
  // Products
  const user = localStorage.getItem("user_email");
  console.log(user);
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);

  let url = window.location.search;

  var cart;

  if (localStorage.getItem("cart") == null) {
    cart = [];
     document.getElementById('cart_empty').style.display="block"
      document.getElementById('cart').style.display="none"

  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }

  // If no query string, display the cart
  if (url == "") {
  
  displayIncart();
  } else {
    let idd = Number(url.substring(1));
    console.log(idd);
    let product = products[idd];
    AddTocart(product);
  }

  function AddTocart(product) {
    let product_cart = {
      name: product.Productname,
      description: product.description,
      price: product.price,
      image: product.image,
      email: user,
    };

    cart.push(product_cart);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayIncart();
    window.location.assign('cart.html')

  }

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
                           <button class="btn btn-danger" onclick="deletee(${i})">Delete</button>
                       </div>
                   </div>
               </div>
  `;
  
          price += cart[i].price;
        }
  
      }
  
      document.getElementById("showw").innerHTML = box;
      document.getElementById("total").innerHTML = price + 30;
      document.getElementById("subtotal").innerHTML = price;

    
   
  }

    // This function is used to delete a specific product 
    function deletee(index) {
      // use splice to delete specific product by using its index then update the localstorage with the latest products then display all the products 
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
 /*          success_message.style.display='flex';
      document.getElementById('message-paragraph').innerHTML='Task is deleted successfully' */
      displayIncart();
    }

  console.log(cart);
}


