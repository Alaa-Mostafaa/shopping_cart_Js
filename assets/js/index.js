
/* Array for products */

const products = [
  {
    Productname: "Vibrant Short-sleeved",
    description:
      "A vibrant short-sleeved shirt with bold, abstract floral patterns in mustard yellow, teal, and white.",
    image: "f1",
    price: 250,
  },
  {
    Productname: "Tropical Short-sleeved",
    description:
      "A tropical short-sleeved shirt featuring green leaves and white flowers on a cream background.",
    image: "f2",
    price: 300,
  },
  {
    Productname: "Delicate Short-sleeved",
    description:
      "A delicate white short-sleeved shirt with soft pink floral designs, creating an elegant look.",
    image: "f3",
    price: 200,
  },
  {
    Productname: "Men's White Short-sleeved",
    description:
      "A men's white short sleeve button-down shirt with a floral print. The small floral print is pink and red.",
    image: "f4",
    price: 220,
  },
  {
    Productname: "Floral Hawaiian Shirt",
    description:
      "This is a stylish and comfortable men's short-sleeved shirt. It features a classic button-down collar and a relaxed fit.",
    image: "f5",
    price: 350,
  },
  {
    Productname: "Men's Corduroy Shirt",
    description:
      "This is a men's corduroy shirt. It is half orange and half blue, and has a white t-shirt underneath. The shirt is hanging.",
    image: "f6",
    price: 450,
  },
  {
    Productname: "Grey Trousers",
    description:
      "Grey linen trousers with flowers on the underside of the trousers.White and pink roses look great in clothing.",
    image: "f7",
    price: 400,
  },
  {
    Productname: "Grey T-shirt",
    description:
      "Grey T-shirt featuring cute print designs and cute cats.It has a wide neck opening for easy wearing and gives an aesthetic look.",
    image: "f8",
    price: 150,
  },
];
localStorage.setItem("products", JSON.stringify(products));


// Show all products in home page 
function displayInHome() {
  var product="";

  for (var i = 0; i < products.length; i++) {
    product += `
             <div class="col-md-3 ">
                        <div class="card p-3 shadow-sm">
                        <a href="showOne.html?${i}" class="text-decoration-none text-black">
                            <img src="assets/images/${products[i].image}.jpg" class="card-img-top" alt="product-photo">
                             </a>
                            <div class="card-body">
                              <h5 class="card-title">${products[i].Productname}</h5>
                              <p class="card-text text-justify text-muted py-2">${products[i].description}</p>
                              <p class="fw-bold">${products[i].price} EGP</p>
                              <div class="text-center">
                                <button class="btn btn-dark" onclick="add(${i})"><i class="fa-solid fa-cart-shopping pe-2"></i> Add to Cart </button>                                
                              </div>
                            </div>
                          </div>
                          
                    </div>
            `;
  }

  document.getElementById("products").innerHTML = product;
}


displayInHome()

function addToCart(){
  console.log("aaa")
}
// Handle navigation bar

if(localStorage.getItem('user_email') === null ){
   document.getElementById('logout').style.display="none"
  document.getElementById('signup').style.display="flex"
  document.getElementById('login').style.display="flex"

}else{
  document.getElementById('logout').style.display="flex"


}