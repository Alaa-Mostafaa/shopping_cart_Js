// Handle navigation bar
if (localStorage.getItem("user_email") === null) {
    document.getElementById("logout").style.display = "none";
    document.getElementById("cart-icon").style.display = "none";
    document.getElementById("signup").style.display = "flex";
    document.getElementById("login").style.display = "flex";
  } else {
    document.getElementById("logout").style.display = "flex";
    document.getElementById("cart-icon").style.display = "flex";
  }
  